
import { useEffect, useState } from "react";
import { ListContainter } from "./style";
import { apiService } from "../../API/api";
import { IClient } from "../../types/Types";

export function ListUser() {
  const [clientList, setClientList] = useState<IClient[]>([])

  useEffect(() => {
    apiService.client.readAllURL().then(response => {
      const data: IClient[] = response.data
      setClientList(data)
      console.log(data)
    })
  }, [clientList])

  function active(id: string, status: boolean) {
    const payload = {
      isActive: status,

    }
    apiService.client.updateURL(id, payload)
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
                <td><span>{client.isActive == true ? "Active" : "Disabled"}</span></td>
                <td><span>{client.pass}</span></td>
                <td>
                  <button onClick={() => active(client._id, true)}>Ativar</button>
                  <button onClick={() => active(client._id, false)}>Desativar</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </ListContainter>
  )
}