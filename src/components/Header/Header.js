import { React, useState, useEffect } from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {

    const date = new Date();
    const [dateTime, setDateTime] = useState({
        hour: date.getHours(),
        minute: date.getMinutes(),
        seconds: date.getSeconds()
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const date = new Date();
            setDateTime({
                hour: date.getHours(),
                minute: date.getMinutes(),
                seconds: date.getSeconds()
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <Navbar bg="primary" className=''>
      <Container>
        <Navbar.Brand href="#top" className='text-light'>Meu assistente</Navbar.Brand>
        <Navbar.Text className='text-light'>Horário de Brasília {dateTime.hour}:{dateTime.minute}:{dateTime.seconds}</Navbar.Text>
      </Container>
    </Navbar>
        </div>
    )
}

export default Header
