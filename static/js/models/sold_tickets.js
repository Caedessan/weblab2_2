class Sold_tickets extends BaseModel { // eslint-disable-line no-unused-vars, no-undef
  constructor () {
    super('sold_tickets')
    this.fields = this.fields.concat(['ticket', 'passenger','train'])
  }
  CreateSold (row) {
    const collection = this.Select()
    const entry = this.GetEmpty()
    entry.id = this.getNextId(collection)
    for (const key in row) {
      if (entry.hasOwnProperty(key) &&
        entry.key !== 'id') {
        entry[key] = row[key]
      }
    }
    const stored = localStorage.getItem('ticket')
    const ticket = stored ? JSON.parse(stored) : []
    let t = entry["ticket"]
    let ind = 0
    for (let el in ticket){
      if (ticket[el]["id"]==t)
      {
        ind = el
      }
    }
    entry["train"]=ticket[ind]["train"]

    collection.push(entry)
    this.Commit(collection)

    const event = new CustomEvent(`${this.collectionName}ListDataChanged`, { detail: collection })
    document.dispatchEvent(event)
  }
  EditTrain(row){
    alert('aa')
    const idd = this.FindIndexById(row["Id_name"])
    let collection = this.Select()
    let tick = collection[idd]["ticket"]
    const stored = localStorage.getItem('ticket')
    const ticket = stored ? JSON.parse(stored) : []
    let ind = 0
    for (let el in ticket){
      if (ticket[el]["id"]==tick)
      {
        ind = el
      }
    }
    ticket[tick]["train"]=row["train"]
    collection[idd]["train"]=row["train"]
    this.Commit()
    localStorage.setItem('ticket', JSON.stringify(ticket))
    const event = new CustomEvent(`${this.collectionName}ListDataChanged`, { detail: collection })
    document.dispatchEvent(event)
  }
}
