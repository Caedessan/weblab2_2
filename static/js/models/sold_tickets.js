class Sold_tickets extends BaseModel { // eslint-disable-line no-unused-vars, no-undef
  constructor () {
    super('sold_tickets')
    this.fields = this.fields.concat(['ticket', 'passenger','train'])
  }
  EditTrain(row){
    const idd = this.FindIndexById(row["Id_name"])
    let collection = this.Select()
    let tick = collection[idd]["ticket"]
    const stored = localStorage.getItem("ticket")
    const tickets = stored ? JSON.parse(stored) : []

    alert(tickets)
  }
}
