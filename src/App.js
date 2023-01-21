import { observer } from "mobx-react-lite";

import { makeObservable, observable, computed, autorun , runInAction} from "mobx"

class OrderLine {
    price = 0
    amount = 1

    constructor(price) {
        makeObservable(this, {
            price: observable,
            amount: observable,
            total: computed
        })
        this.price = price
    }

    get total() {
        console.log("Computing...")
        return this.price * this.amount
    }
}

const order = new OrderLine(0)

const stop = autorun(() => {
    console.log("Total: " + order.total)
})

stop()


console.log(order.total);


// Neither the computation nor autorun will be recomputed.
function App() {
 
  return (
    <div className="App">
      
    </div>
  );
}

export default observer(App);
