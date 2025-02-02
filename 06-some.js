const numbers = [1,2,3,4]

const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ]

  const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];

const respuesta = numbers.some(item => item % 2 ===0)
console.log(respuesta)

const respuesta2 = orders.some(item => item.delivered)
console.log(respuesta2)

// const respuesta3 = dates.some()

const newAppointment = {
  startDate: new Date(2021, 1, 1, 10),
  endDate: new Date(2021, 1, 1, 13),
}

const { areIntervalsOverlapping } = require("date-fns");

const isOverlap = (newDate) => {
  return dates.some(date => areIntervalsOverlapping(
    { start: date.startDate, end: date.endDate },
    { start: newDate.startDate, end: newDate.endDate },
  )
)}

console.log(isOverlap(newAppointment))