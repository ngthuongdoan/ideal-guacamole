const PRODUCTS = [
	{
		id: 1,
		name: "Basic Tee 1",
		price: 24.0,
		image:
			"https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770",
	},
	{
		id: 2,
		name: "Basic Tee 2",
		price: 24.0,
		image:
			"https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770",
	},
	{
		id: 3,
		name: "Basic Tee 3",
		price: 24.0,
		image:
			"https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770",
	},
	{
		id: 4,
		name: "Basic Tee 4",
		price: 24.0,
		image:
			"https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770",
	},
	{
		id: 5,
		name: "Basic Tee 5",
		price: 24.0,
		image:
			"https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770",
	},
	{
		id: 6,
		name: "Basic Tee 6",
		price: 50.0,
		image:
			"https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770",
	},
]

const template = `<li>
<a href="#" class="group block overflow-hidden">
  <img
    src={image}
    alt=""
    class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
  />

  <div class="relative bg-white pt-3">
    <h3
      class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
    >
      {name}
    </h3>

    <p class="mt-2">
      <span class="sr-only"> Regular Price </span>

      <span class="tracking-wider text-gray-900"> £{price} GBP </span>
    </p>
  </div>
</a>
</li>`

const container = document.getElementsByClassName("product-container")[0]

for (let index = 0; index < PRODUCTS.length; index++) {
	const element = PRODUCTS[index]
	const finalProduct = template
		.replace("{name}", element.name)
		.replace("{image}", element.image)
		.replace("{price}", element.price)

	container.innerHTML += finalProduct
}
