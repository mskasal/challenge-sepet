/*
Pure js kullanarak bir arama sayfası yapmanı istiyoruz.
Bu arama sayfasında; ekteki json kullanılarak; ürün listesi gösterilecek, ürün sepete eklenecek (client'ta) ve
 sepetteki ürünlere göre fiyat gözükecek, ürünlerin sayısı değişebilecek (sepette 1 ürün varken 5 yapabilecek gibi).
 */

import { App } from './components/App';

document.body.prepend(
	new App()
);
