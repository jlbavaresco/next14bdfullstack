import { getProdutosDB } from "@/bd/produtoUseCases";

export default async function Home() {

  const produtos = await getProdutosDB();
  return (
    <div>
      <table>
        <tr>
          <th>Código</th>
          <th>Nome</th>
          <th>Categoria</th>
        </tr>
        {
          produtos.map((produto)=>(
            <tr>
            <td>{produto.codigo}</td>
            <td>{produto.nome}</td>
            <td>{produto.categoria_nome}</td>
          </tr>
          ))
        }
      
       
      </table>
    </div>
  );
}
