
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
var list = document.getElementById("cus_list"), fragment = document.createDocumentFragment(), element;
for (var i = 0, x = customers.length; i < x; i++) {
  element = document.createElement("li");
  element.appendChild(document.createTextNode("Company: " + customers[i].company + "<p>"));
  element.appendChild(document.createTextNode("Name: " + customers[i].name));
  element.appendChild(document.createTextNode("Quote: " + customers[i].quote));
  element.appendChild(document.createTextNode("image: " + customers[i].image));
  element.appendChild(document.createTextNode("website: " + customers[i].url));
  fragment.appendChild(element);
}
list.appendChild(fragment);
