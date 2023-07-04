
import { ListContainter } from "./style";

export function ListUser() {
  const userList = [{
    "email":"frpbotero@gmail.com",
    "status":true
  },
    {
      "email":"emeteste12@gmail.com",
      "status":false
  
    }
  ]


  function ChangeMode(status:boolean){
    if(status==true){
      status= false;
    }else{
      status=true;
    }
  }

  return (
    <ListContainter>
      <h1>Lista de Usuários Cadastrados</h1>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Ativado</th>
            <th>Alterar</th>
          </tr>
        </thead>
        <tbody>
          {
            userList.map(user => (
              <tr>
                <td>{user.email}</td>
                <td><span>{user.status==true?"Active":"Disabled"}</span></td>
                <td><button onClick={ChangeMode}>Change</button></td>
              </tr>
            ))
          }
       


        </tbody>
      </table>

    </ListContainter>
  )
}