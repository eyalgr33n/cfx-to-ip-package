<div align="center">

# CFX-TO-IP
CFX-TO-IP is a JavaScript library for quick and reliable IP address resolution from CitizenFX platform code. Simplifies multiplayer gaming integration with seamless API interaction, asynchronous execution, and robust error handling.



---

## Installation
You Can Install cfxtoip via npm
```bash
npm install cfx-to-ip
```

---

### Usage
```bash
const CFXTOIP = require('cfx-to-ip');

const resolver = new CFXTOIP();
resolver.resolve('pep8am')
.then(({ ip, port }) => console.log(`IP: ${ip}, Port: ${port}`))
.catch(err => console.error(err.message));


```

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---


## Credits

- Github: eyalgr33n
- Discord eyalgr33n.#0
- Website: eyalgreen#0

---



<div>