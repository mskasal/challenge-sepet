/*
Pure js kullanarak bir arama sayfası yapmanı istiyoruz.
Bu arama sayfasında; ekteki json kullanılarak; ürün listesi gösterilecek, ürün sepete eklenecek (client'ta) ve
 sepetteki ürünlere göre fiyat gözükecek, ürünlerin sayısı değişebilecek (sepette 1 ürün varken 5 yapabilecek gibi).

Kurallar:
-Herhangi bir kütüphane kullanılmamalı, pure Js ile ilerlenmelidir.
-Html-css tarafında ise bootstrap yada türevi bir framework kullanılmamalıdır.

Bunlara ek olarak yapılacak her şey de artı puan olarak değerlendirilecektir. (jsdoc uygunluğu, moduler olması, vs.vs...)
 */

import { App } from './components/App';

document.body.prepend(
	new App()
);
