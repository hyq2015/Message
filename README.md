### introduction
show alert message on your webpage
### usage
npm install -D alert-message

```
import Message from "alert-message"

/**
 * @param args - {txt: "", time: 2500}, time default 2500(ms)
 */
Message.warn({txt: "warning text"});
Message.error({txt: "error text"});
Message.success({txt: "success text"});
```
