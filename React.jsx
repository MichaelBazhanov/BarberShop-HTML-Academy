function MyButton() {
	return <button>I'm a button</button>;
}

export default function MyApp() {
	return (
		<body>
			<header class='main-header'>
				<nav class='navigation'>
					<ul class='navigation-list'>
						<li class='navigation-item'>
							<a class='navigation-link' href='about.html'>
								О нас
							</a>
						</li>
						<li class='navigation-item'>
							<a class='navigation-link' href='catalog.html'>
								Каталог
							</a>
						</li>
						<li class='navigation-item'>
							<a class='navigation-link' href='fag.html'>
								Частые вопросы
							</a>
						</li>
					</ul>

					<ul class='navigation-list navigation-user'>
						<li class='navigation-item'>
							<a class='navigation-link' href='#'>
								<span class='visually-hidden'>Поиск</span>
							</a>
						</li>
						<li class='navigation-item'>
							<a class='navigation-link' href='#'>
								<span class='visually-hidden'>
									КорзинаКорзинаКорзина Корзина Корзина КорзинаКорзина Корзина
									КорзинаКорзина Корзина КорзинаКорзина Корзина КорзинаКорзина
									123123 Корзина КорзинаКорзина Корзина КорзинаКорзина Корзина 2
									КорзинаКорзина Корзина КорзинаКорзина Корзина Корзина
								</span>
							</a>
						</li>
						<li class='navigation-item'>
							<a class='navigation-link' href='#'>
								Вход
							</a>
						</li>
					</ul>
				</nav>
			</header>
			<main class='main-index'></main>
			<footer class='main-footer'></footer>
		</body>
	);
}
