
import { getProdutosDB } from "@/bd/produtoUseCases";

export const revalidate = 60; // revalida a cada 30 segundos

export default async function Home() {

  const produtos = await getProdutosDB();
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Categoria</th>
          </tr>
        </thead>
        <tbody>
          {
            produtos.map((produto) => (
              <tr key={produto.codigo}>
                <td>{produto.codigo}</td>
                <td>{produto.nome}</td>
                <td>{produto.categoria_nome}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
