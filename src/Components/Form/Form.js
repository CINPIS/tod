import React from 'react'
import './Form.css'
import './Responsive.css'

const FormDot = ({handleSubmit, handleChange}) => {
    return(
    <div className="form-box">
        <form className="form" onSubmit={handleSubmit}>
            <legend className="hidden-form">Form</legend>
            <div className="field-group">
                <div className="field nome">
                    <label>*Nome: </label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Informe seu nome" 
                        required="required"
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="field-group">
				<div className="field">
					<label>*E-mail: </label>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Informe seu e-mail" 
                        required="required" 
                        onChange={handleChange}
                    />
				</div>
				<div className="field">
					<label>*Telefone: </label>
                    <input 
                        type="tel" 
                        name="tel" 
                        placeholder="(__) ____-____" 
                        required="required"
                        onChange={handleChange}
                     />
				</div>
			</div>
			<div className="field-group">
				<div className="field">
				<label>*Mensagem: </label>
					<textarea 
						name="comment" 
						id="comment" 
						cols="30" 
						rows="7"
						placeholder="Escreva aqui"
						required="required" 
                        onChange={handleChange}>
					</textarea>
				</div>
			</div>
		<div className="send-form">
			<button type="submit">Enviar</button>
		</div>
           
        </form>
    </div>
    );
}

export default FormDot;