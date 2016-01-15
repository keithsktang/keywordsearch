
var customers = [
            { company: "Tradesparq",
              name: "Brian Hager, Founder & President, Tradesparq",
              quote: "We had many challenges that needed to be addressed. Performance, scalability, and security are very important to us. ChinaNetCloud's custom solution allowed us to point our resources towards building a best-in-class product. I'm happy to recommend ChinaNetCloud as the 'best of the best' in China.",
              image: "img/logos/tradesparq.jpg",
              url: "www.tradesparq.com"
            },
            { company: "Zanadu",
              name: "Phil Mak, CTO of Zanadu",
              quote: "I actually wish we had started working with them from the very beginning when we first launched our website, which would have saved us from a lot of pain and headaches. Of all the vendors I have worked with in the past, ChinaNetCloud is by far the most professional team I have met in this space.",
              image: "img/logos/zanadu.jpg",
              url: "www.zanadu.cn"
            }
          ];
          var item = customers[Math.floor(Math.random() * customers.length)],
            list = document.getElementById('cus_list'),
            fragment = document.createDocumentFragment(),
            companyEle = document.createElement("li"),
            nameEle = document.createElement("li"),
            quoteEle = document.createElement("li"),
            imageEle = document.createElement("li"),
            urlEle = document.createElement("li");
          companyEle.innerText = "Company: " + item.company;
          nameEle.innerText = "Name: " + item.name + " ";
          quoteEle.innerText = "Quote: " + item.quote + " ";
          imageEle.innerText = "logo: " + item.image + " ";
          urlEle.innerText = "website: " + item.url + " ";
          fragment.appendChild(companyEle);
          fragment.appendChild(nameEle);
          fragment.appendChild(quoteEle);
          fragment.appendChild(imageEle);
          fragment.appendChild(urlEle);
          list.appendChild(fragment);
// var item = customers[1], list = document.getElementById('cus_list'), fragment = document.createDocumentFragment(), element = document.createElement("li");
//
//   element.appendChild(document.createTextNode("Company: " + item.company));
//     element.appendChild(document.createTextNode("Name: " + item.name + " "));
//
//     fragment.appendChild(element);
//   list.appendChild(fragment);
