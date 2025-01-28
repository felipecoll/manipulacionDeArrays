const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

  const buscador = products.find((item => item.price === 34))

  console.log(buscador)

  const buscador2 = products.findIndex((item => item.price ===355))

  console.log(buscador2)