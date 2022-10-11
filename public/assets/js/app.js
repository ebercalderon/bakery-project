window.addEventListener('load', fn, false);

//  window.onload = function loader() {
function fn() {
    // Preloader
    if (document.getElementById('preloader')) {
        setTimeout(() => {
            document.getElementById('preloader').style.visibility = 'hidden';
            document.getElementById('preloader').style.opacity = '0';
        }, 350);
    }
    // Products
    activateProduct();
}

//Product

/*    Product Active    */
function getClosest(elem, selector) {
    // Element.matches() polyfill
    if (!Element.prototype.matches) {
        Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            function (s) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                    i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) {
                }
                return i > -1;
            };
    }

    // Get the closest matching element
    for (; elem && elem !== document; elem = elem.parentNode) {
        if (elem.matches(selector)) return elem;
    }
    return null;
}

function activateProduct() {
    var productItems = document.getElementsByClassName('sub-products-item');
    if (productItems) {
        var matchingProductItem = null;
        for (var idx = 0; idx < productItems.length; idx++) {
            if (productItems[idx].href === window.location.href) {
                matchingProductItem = productItems[idx];
            }
        }

        if (matchingProductItem) {
            matchingProductItem.classList.add('active');
            var immediateParent = getClosest(matchingProductItem, 'li');
            if (immediateParent) {
                immediateParent.classList.add('active');
            }

            var parent = getClosest(matchingProductItem, '.parent-products-item');
            if (parent) {
                parent.classList.add('active');
                var parentProductItem = parent.querySelector('.products-item');
                if (parentProductItem) {
                    parentProductItem.classList.add('active');
                }
                var parentOfParent = getClosest(parent, '.parent-parent-products-item');
                if (parentOfParent) {
                    parentOfParent.classList.add('active');
                }
            } else {
                var parentOfParent = getClosest(
                    matchingProductItem,
                    '.parent-parent-products-item'
                );
                if (parentOfParent) {
                    parentOfParent.classList.add('active');
                }
            }
        }
    }
}

/*  Clickable manu   */
if (document.getElementById('navigation')) {
    var elements = document
        .getElementById('navigation')
        .getElementsByTagName('a');
    for (var i = 0, len = elements.length; i < len; i++) {
        elements[i].onclick = function (elem) {
            if (elem.target.getAttribute('href') === 'javascript:void(0)') {
                var subproduct = elem.target.nextElementSibling.nextElementSibling;
                subproduct.classList.toggle('open');
            }
        };
    }
}

/*   Product Sticky     */
function windowScroll() {
    const navbar = document.getElementById('topnav');
    if (navbar != null) {
        if (
            document.body.scrollTop >= 50 ||
            document.documentElement.scrollTop >= 50
        ) {
            navbar.classList.add('nav-sticky');
        } else {
            navbar.classList.remove('nav-sticky');
        }
    }
}

window.addEventListener('scroll', (ev) => {
    ev.preventDefault();
    windowScroll();
});

/*    Back To TOp    */
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var mybutton = document.getElementById('back-to-top');
    if (mybutton != null) {
        if (
            document.body.scrollTop > 500 ||
            document.documentElement.scrollTop > 500
        ) {
            mybutton.classList.add('block');
            mybutton.classList.remove('hidden');
        } else {
            mybutton.classList.add('hidden');
            mybutton.classList.remove('block');
        }
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/*  Active Sidebar   */
(function () {
    var current = location.pathname.substring(
        location.pathname.lastIndexOf('/') + 1
    );
    if (current === '') return;
    var productItems = document.querySelectorAll('.sidebar-nav a');
    for (var i = 0, len = productItems.length; i < len; i++) {
        if (productItems[i].getAttribute('href').indexOf(current) !== -1) {
            productItems[i].parentElement.className += ' active';
        }
    }
})();

/*   Feather Icons   */
feather.replace();

/*    DD Product        */
var ddproducts = document.getElementsByClassName('dd-products');
for (var i = 0, len = ddproducts.length; i < len; i++) {
    ddproducts[i].onclick = function (elem) {
        elem.stopPropagation();
    };
}

/*     Small Product    */
try {
    var spy = new Gumshoe('#navmenu-nav a');
} catch (err) {
}

/*      WoW Js       */
try {
    new WOW().init();
} catch (error) {
}
