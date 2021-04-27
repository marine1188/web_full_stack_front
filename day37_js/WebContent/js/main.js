// main.js
import random from './basic.js'



//10개의 li 만들어서 짝수 일때만 이벤트를 발생 시킨다

for( let i = 0; i < 10; i += 1) {
	const li = document.createElement('li')
	li.textContent = `list-${i + 1}`
	if( i % 2 !== 0){
	li.addEventListener('click', function(){
		console.log(li.textContent)
	})
	}
	ulEl.appendChild(li)
}

const ulEl = document.querySelector('ul')

for( let i = 0; i < 3; i += 1) {
	const li = document.createElement('li')
	li.textContent = `list-${i + 1}`
	ulEl.appendChild(li)
}

log
console.log('')
// for( 초기값;  조건 ; 증감식 ) {   }
for(let i=0; i < 3; i += 1 ) {
	console.log(i)
}


// 다중 if문
const q = random()

if( q === 0 ) {
	console.log('q is 0')
} else if( q === 2 ){
	console.log('q is 2')
} else if( q === 4 ){
	console.log('q is 4')
} else {
	console.log('reset.....')
}

// 삼항(조건)연산자
const ab = 1 < 2

if( ab ) {
	console.log('참')
} else {
	console.log('거짓')
}

console.log(ab ? '참' : '거짓')

// 논리연산자 
const su = 1 === 1;
const str = 'AB' === 'AB'
const c = false

console.log(su)
console.log(str)
console.log(c)
console.log('\n')

console.log('&& : ' , su && str && c)  // and, 그리고,..
console.log('|| : ' , su || str)
console.log('|| : ' , su || str || c)

// 비교연산자
const x = 1
const y = 3


console.log(x !== y)  
console.log(x < y)  

console.log(x === y)  

function isEqual(x, y){
	return x === y
}

console.log('isEqual(3, "3") = '+	isEqual(3, "3"))  


// 할당연산자
let a = 2
//a = a + 1
 a += 1
console.log(a)

// 산술연산자
console.log(1 + 2)
console.log(5 - 7 )
console.log(3 * 4)
console.log(10 / 2)
console.log(7 % 2)

/*
const a = 'Hello'
// split : 문자를 인수 기준으로 쪼개서 배열로 반환
// reverse : 배열을 뒤집기(역으로 출력)
// join : 배열을 인수 기준으로 문자로 병합해 반환

const b = a.split('').reverse().join('')  //메소드 체이닝

console.log(a)
console.log(b)



const boxEl = document.querySelector('.box')

console.log(boxEl.textContent)  // Box!!!  , getter

boxEl.textContent = '상자~~'  // setter 
console.log(boxEl.textContent)


let boxEls = document.querySelectorAll('.box')
console.log(boxEls)

boxEls.forEach(function(box, index) { 
	box.classList.add(`order-${index + 1}`)
	console.log(index, box)
})


let boxEl = document.querySelector('.box')
let isContains = boxEl.classList.contains('active')
console.log(isContains)

boxEl.classList.remove('active')
isContains = boxEl.classList.contains('active')
console.log(isContains)



console.log(boxEl)

boxEl.addEventListener('click', function () {
	console.log('Click');
	boxEl.classList.add('active');
	console.log(boxEl.classList.contains('active'))
});


let isShow = true
let checked = false

if ( isShow ) {
	console.log('Show!!!')
} else {
	console.log('1233')
}

if ( checked ) {
	console.log('Checked!!!')
}
*/