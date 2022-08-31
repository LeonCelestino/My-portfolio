import React, {useState, useEffect, useRef} from 'react';
import emailjs from 'emailjs-com'
function Contact() {

    const [nameInput, setNameInput] = useState('');
    const [subjectInput, setSubjectInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [textInput, setTextInput] = useState('');
    const [boolError, setBoolError] = useState(true);
    const [boolSuccess, setBoolSuccess] = useState(false);

    const handleNameChange = (e) => {
        setNameInput(e.target.value);
    }
    const handleSubjectChange = (e) => {
        setSubjectInput(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmailInput(e.target.value);
    }
    const handleTextChange = (e) => {
        setTextInput(e.target.value);
        
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (nameInput === '' || subjectInput === '' || emailInput === '' || textInput === '') 
        {
            setBoolError(false);
            setBoolSuccess(false);
        } else
        {
            setBoolError(true);
            setBoolSuccess(true);

            const newTextInput = textInput.replaceAll('\n', '<br />');

            const templateParams = {
                name: nameInput,
                subject: subjectInput,
                email: emailInput,
                message: newTextInput
            }

            emailjs.send('service_0x5o1uh', 'template_xyz9978', templateParams, 'kO9H8IJDBqS8lyna1')
            .then((result) => {
                
                console.log(result.text);
                
            }, (error) => {
                console.log(error.text);
            });
            setNameInput('');
            setSubjectInput('');
            setEmailInput('');
            setTextInput('');

            

        }

    }

    return (
    <section id="contact" className="contact">
        <main>
            <h2>Isso foi o que eu tinha pra falar.<br /> Antes de ir, deseja dizer algo?</h2>
            <p  className={!boolError ? 'error' : ''}></p>
            <p className={boolSuccess ? 'success' : ''}></p>
            <form onSubmit={handleSubmit}>
                <label>Fale-me seu nome: </label>
                <input type="text" placeholder="Nome" name="name" value={nameInput} onChange={handleNameChange}></input>
                <label>Sobre o que você quer falar?: </label>
                <input type="text" name="subject" placeholder="Assunto" value={subjectInput} onChange={handleSubjectChange}></input>
                <label>Diga seu e-mail para nos falarmos outra hora: </label>
                <input type="email" name="email" placeholder="Email" value={emailInput} onChange={handleEmailChange}></input>
                <label>Diga-me o que quer dizer: </label>
                <textarea name="message"  rows="10" cols="30" wrap='hard' placeholder="Fale aqui!" value={textInput} onChange={handleTextChange}/>
                <input type="submit" value="submit"></input>
            </form>
        </main>
    </section>
    );
}

export default Contact;
