import { ListContainter } from "./style";

export function ListUser() {
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
          <tr>
            <td>mnovaes@gmail.com</td>
            <td><span>Active</span></td>
            <td><button>Change</button></td>
          </tr>
          <tr>
            <td>cgomes@gmail.com</td>
            <td><input type="checkbox" name="IsActive" id="IsActive" /></td>
            <td><button>Change</button></td>
          </tr>


        </tbody>
      </table>

    </ListContainter>
  )
}