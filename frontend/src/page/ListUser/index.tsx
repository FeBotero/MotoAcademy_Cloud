
import { useEffect, useState } from "react";
import { ListContainter } from "./style";
import { apiService } from "../../API/api";
import { IClient } from "../../types/Types";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ListUser() {
  const [clientList, setClientList] = useState<IClient[]>([]);
  const [email, setEmail] = useState('');
   useEffect(() => {
    refresh(); // Fetch and set the client list on component mount
  }, []);

  function refresh() {
    apiService.client.readAllURL().then((response) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data: any = response.data; // Assuming IClient is the correct type
      setClientList(data);
    });
  }

  function active(id: string|undefined, status: boolean) {
    const payload = {
      isActive: status,

    }
    apiService.client.updateURL(id, payload).then(() => {
      refresh(); // Call refresh after updating the status to get the updated list
    });
  }

  const cadastrar = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    if(email===""){
      toast.error("Favor inserir email!");
    }
    const payload = {
      email: email,
      isActive: false,
      pass: '123456'
    }
    if(email!==""){
    apiService.client.createURL(payload).then(() => {
      toast.success("Usuário adicionado com sucesso");
      refresh(); // Call refresh after updating the status to get the updated list
      setEmail('')
    }).catch(error=>{
      toast.error(`${error.response.data.message} | ${email}`);
      setEmail('')
    })
    }
  }
  async function deleteClient(id:string|undefined){
    if(id){
      await apiService.client.deleteURL(id).then(()=>{
        refresh();
      })
    }
  }
  return (
    <ListContainter>
      <div>
        <h1>Lista de Usuários Cadastrados</h1>
        <form onSubmit={cadastrar}>
            <input 
              type="email" 
              placeholder="E-mail" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="" type="submit">Cadastrar</button>
        </form>
        
      </div>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Ativado</th>
            <th>Senha</th>
            <th>Alterar</th>
          </tr>
        </thead>
        <tbody>
          {
            clientList.map(client => (
              <tr key={client._id}>
                <td>{client.email}</td>
                <td><span>{client.isActive == false ? "Ativo" : "Desativado"}</span></td>
                <td><span>{client.pass}</span></td>
                <td>
                  <button onClick={() => active(client._id, false)}>Ativar</button>
                  <button onClick={() => active(client._id, true)}>Desativar</button>
                  <button onClick={()=>deleteClient(client._id)}>Excluir</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>



      <ToastContainer />
    </ListContainter>


  )

  
}