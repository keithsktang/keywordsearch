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
            },
            { company: "Yves Rocher",
              name: "Pippin Zhang, eCommerce Manager of Yves Rocher",
              quote: "Our eCommerce site had to meet our strict security requirements, be scalable, and launch in a very short time. ChinaNetCloud's Private Cloud solution met all our requirements, and their 24x7 unlimited support made my life easy. Thanks a lot for the great support during the set up phase and the collaborative spirit is really appreciated.",
              image: "img/logos/yves-rocher.jpg",
              url: "www.yvesrocherusa.cn"
            },
            { company: "SmarTots",
              name: "Victor Wong, Founder and Chief Product Officer, SmarTots",
              quote: "I'm a big fan of ChinaNetCloud's managed services and have used them at several of my companies. With ChinaNetCloud, I can focus on creating great products and features with the confidence that my web services will not go down.",
              image: "img/logos/smartots.jpg",
              url: "www.smartots.com"
            },
            { company: "Infinitus",
              name: "Angelen Ngan, Infinitus",
              quote: "The support team has been very professional and responsive.  Project Manager Rebecca and her team demonstrated professionalism and they respond to our questions and concerns timely. We are very pleased with your project team and the service received so far.  Keep up the great work and looking forward to a good partnership.",
              image: "img/logos/infinitus.jpg",
              url: "www.infinitus-int.com"
            },
            { company: "Bluecom Group",
              name: "Patrick Deloy, Executive Director, Bluecom",
              quote: "ChinaNetCloud is our trusted partner for all server management and hosting services. We entrust our clients to the long-term services of ChinaNetCloud and can be assured that they are greatly taken care of with ChinaNetCloud's first-class service and technical expertise, ensuring smooth operations and zero downtime.",
              image: "img/logos/bluecom.jpg",
              url: "www.bluecomgroup.com"
            }
            ];
var item = customers[Math.floor(Math.random() * customers.length)],
  list = document.getElementById('cus_list'),
  quoteClass = document.getElementById('customer-quotes'),
  imageClass = document.getElementById('customer-logos'),
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
quoteClass.appendChild(companyEle);
imageClass.appendChild(imageEle);

// var item = customers[1], list = document.getElementById('cus_list'), fragment = document.createDocumentFragment(), element = document.createElement("li");
//
//   element.appendChild(document.createTextNode("Company: " + item.company));
//     element.appendChild(document.createTextNode("Name: " + item.name + " "));
//
//     fragment.appendChild(element);
//   list.appendChild(fragment);
