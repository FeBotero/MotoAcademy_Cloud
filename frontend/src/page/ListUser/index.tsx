
import { useEffect, useState } from "react";
import { ListContainter } from "./style";
import { apiService } from "../../API/api";
import { IClient } from "../../types/Types";

export function ListUser() {
  const [clientList, setClientList] = useState<IClient[]>([])
  
   useEffect(() => {
    refresh(); // Fetch and set the client list on component mount
  }, []);

  function refresh() {
    apiService.client.readAllURL().then((response) => {
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



  return (
    <ListContainter>
      <div>
        <h1>Lista de Usuários Cadastrados</h1>
        <button>Novos Clientes</button>
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
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>




    </ListContainter>


  )

  
}