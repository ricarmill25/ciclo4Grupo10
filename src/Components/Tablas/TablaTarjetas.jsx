const TablaTarjetas = (props) => 

{
  const {Tarjeta} = props;
  return (
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr className="table-dark">
            <th scope="col">cedula</th>
            <th scope="col">placa</th>
             <th scope="col">numeroTarjeta</th>
            <th scope="col">saldo</th>
          </tr>
        </thead>
        <tbody className="table-light">
        {Tarjeta.map((Tarjeta) =>{
          return<tr><th>{Tarjeta.cedula}</th>
          <td>{Tarjeta.placa}</td>
           <td>{Tarjeta.numeroTarjeta}</td>
          <td>{Tarjeta.saldo}</td>
          </tr>
                          })}
        </tbody>
      </table>
  );
}



export default TablaTarjetas;