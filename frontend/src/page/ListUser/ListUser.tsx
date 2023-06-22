export function ListUser(){
  return(
    <>
    <h1>Lista de Usuários Cadastrados</h1>
    <table>
      <thead>
        <th>Email</th>
        <th>Ativado</th>
      </thead>
      <tbody>
      <tr>
        <td>mnovaes@gmail.com</td>
        <td><input type="checkbox" name="IsActive" id="IsActive" /></td>
      </tr>
      <tr>
        <td>cgomes@gmail.com</td>
        <td><input type="checkbox" name="IsActive" id="IsActive" /></td>
      </tr>
       
       
      </tbody>
    </table>
    
    </>
  )
}