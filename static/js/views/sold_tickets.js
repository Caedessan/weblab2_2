'use strict'

const soldModel = new Sold_tickets() // eslint-disable-line no-undef

function initAddForm () {
  const form = window.document.querySelector('#shop-add-form')
  form.addEventListener('submit', function (e) {
    e.preventDefault()

    const formData = new FormData(e.target)
    const shopData = {}
    formData.forEach((value, key) => {
      shopData[key] = value
    })

    soldModel.CreateSold(shopData)

    e.target.reset()
  })
}
function DropForm () {
  const form = window.document.querySelector('#drop-form')
  form.addEventListener('submit', function (e) {
    e.preventDefault()
    soldModel.Drop()
    e.target.reset()
  })
}
function DeleteForm () {
  const form = window.document.querySelector('#delete-form')
  form.addEventListener('submit', function (e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const shopData = {}
    formData.forEach((value, key) => {
      shopData[key] = value
    })
    soldModel.DeleteItem(shopData)
    e.target.reset()
  })
}
function EditForm () {
  const form = window.document.querySelector('#edit-form')
  form.addEventListener('submit', function (e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const shopData = {}
    formData.forEach((value, key) => {
      shopData[key] = value
    })
    soldModel.EditTrain(shopData)
    e.target.reset()
  })
}
function initList () {
  localStorage.removeItem("sold_tickets")
  window.jQuery('#sold-list').DataTable({
    data: soldModel.Select(),
    columns: [
      { title: 'ID', data: 'id' },
      { title: 'Ticket', data: 'ticket' },
      { title: 'Passenger', data: 'passenger' },
      { title: 'Train', data: 'train' }
    ]
  })
}

function initListEvents () {
  document.addEventListener('shopsListDataChanged', function (e) {
    const dataTable = window.jQuery('#sold-list').DataTable()

    dataTable.clear()
    dataTable.rows.add(e.detail)
    dataTable.draw()
  }, false)
}

window.addEventListener('DOMContentLoaded', e => {
  initAddForm()
  initList()
  initListEvents()
  EditForm()
  DeleteForm()
  DropForm()
})
