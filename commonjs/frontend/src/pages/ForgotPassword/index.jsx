import React from 'react';
import { useHistory } from "react-router-dom";
import './styles.css';


const Conta = () => {
    const [conta, setConta] = useState([]);

    useEffect(async() => {
        const result = await fetch("http://localhost:5333/processamento_conta");
        setProdutos(await result.json())
    }, [])

    console.log(produtos)
    
    return (
        <>
            <div className="sectionPassword">
                <div className="content">
                    
                    <form action="" method="post">
                        <h2></h2>
                        
                        <div className="container">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            <input className="input" type="text" name="numero1" placeholder="numero 1" required />
                        </div>

                        <div className="container">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            <input className="input" type="text" name="numero2" placeholder="numero 2" required />
                        </div>

                        <select name="contas">
                            <option value="adicao">adicao</option>
                            <option value="subtracao">subtracao</option>
                        </select>



                        <button type="submit" value="Enviar" className="btn container" >Enviar</button>
                        
                    </form>
                    
                    <div className="resultado">
                        <h3>Resultado: </h3>

                        <div className="container-fluid text-center">
                            <div className="row">
                                {   
                                    produtos.map(value => {
                                        return (
                                            
                                            <div key={value.id} className="col-sm-3">
                                                <div className="card bg-light mb-3">
                                                    <div > 
                                                        <h5>{value.descricao}</h5>
                                                        <br /> 
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })     
                                }
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );

}
export default formulario;