import React, { useEffect } from 'react';
import Header from '../components/header';
import Modal from '../components/modal';
import { pageLoadHtmlClsChk } from '../components/tools';

const Work = props => {

  useEffect(() => {
    pageLoadHtmlClsChk('work');
  }, []);
  return (
    <div className="page page-work">
      <div className="insert-100 insert-100-a">
        <div className="insert-100-insert-a">

          <Header title="My Portfolio" />
        </div>
        <div className="insert-100-insert-b">
          More samples of my work can be provided upon request.
        </div>
      </div>
      <section id="seo" className="sec sec-1">
        <div className="insert-101 insert-101-a">
          <Header title="SEO" />
        </div>
        <div className="insert-101 insert-101-b">
          Combining SEO and product knowledge to capture more conversions.
        </div>
        <div className="insert-101 insert-101-c">
          <div className="insert-102 insert-102-a">
            <div className="insert-103 insert-103-z">
              <h4>Amazon A+ Content Copy</h4>
            </div>
            <div className="insert-103 insert-103-a">
              <span>Artificial Rose Heads</span>
              <a
                href="https://www.amazon.com/dp/B07BLTPVN9?pd_rd_i=B07BLTPVN9&pd_rd_w=XSOv2&pf_rd_p=ee186ce0-6bf7-4893-85b9-f3368b019e0f&pd_rd_wg=w7SE9&pf_rd_r=193RNGC13W5RFD866270&pd_rd_r=98629f92-8e6f-4207-bb0d-5e8ddd200f7d"
                target="_blank">
                (click here for more details)
            </a>
            </div>
            <div className="insert-103 insert-103-b">
              <div className="insert-104 insert-104-a">
                <Modal
                  size={"xl"}
                  modalHeader={"Amazon A+ Content Copy - Artificial Rose Heads"}
                  buttonLabel={<img src="images/roseheads.png" alt="Amazon A+ Content Rose Heads" />}
                  modalBody={<img src="images/roseheads.png" alt="Amazon A+ Content Rose Heads" />}
                  className="work-modal image-modal"
                />
              </div>
              <div className="insert-104 insert-104-b">
                <Modal
                  size={"xl"}
                  modalHeader={"Amazon A+ Content Copy - Rose Heads"}
                  buttonLabel={<img src="images/roseheadsCopy.png" alt="Amazon A+ Content Rose Heads" />}
                  modalBody={<img src="images/roseheadsCopy.png" alt="Amazon A+ Content Rose Heads" />}
                  className="work-modal image-modal"
                />
              </div>
            </div>
          </div>
          <div className="insert-102 insert-102-b">
            <div className="insert-103 insert-103-z">
              <h4>Amazon A+ Content Copy</h4>
            </div>
            <div className="insert-103 insert-103-a">
              <span>Notebooks</span>
              <a
                href="https://www.amazon.com/Kraft-Notebook-Bulk-Different-Happiness/dp/B079JHHYGT/ref=sr_1_15?dchild=1&keywords=inspirational+notebooks&qid=1627274507&sr=8-15"
                target="_blank">
                (click here for more details)
            </a>
            </div>
            <div className="insert-103 insert-103-b">
              <div className="insert-104 insert-104-a">
                <Modal
                  size={"xl"}
                  modalHeader={"Amazon A+ Content Copy - Notebooks"}
                  buttonLabel={<img src="images/notebooks.png" alt="Amazon A+ Notebooks" />}
                  modalBody={<img src="images/notebooks.png" alt="Amazon A+ Notebooks" />}
                  className="work-modal image-modal"
                />
              </div>
              <div className="insert-104 insert-104-b">
                <Modal
                  size={"xl"}
                  modalHeader={"Amazon A+ Content Copy - Notebooks"}
                  buttonLabel={<img src="images/notebooksCopy.png" alt="Amazon A+ Notebooks" />}
                  modalBody={<img src="images/notebooksCopy.png" alt="Amazon A+ Notebooks" />}
                  className="work-modal image-modal"
                />
              </div>
            </div>
          </div>
          <div className="insert-102 insert-102-c">
            <div className="insert-103 insert-103-z">
              <h4>Juvo Plus Product Description Page</h4>
            </div>
            <div className="insert-103 insert-103-a">
              <span>Sewing Basket</span>
              <a
                href="https://www.amazon.com/Vintage-Organizer-Supplies-Notions-Rectangular/dp/B01HJKRE1Q?ref_=ast_sto_dp"
                target="_blank">
                (click here for more details)
              </a>
            </div>
            <div className="insert-103 insert-103-b">
              <div className="insert-104 insert-104-a">
                <Modal
                  size={"xl"}
                  modalHeader={"Juvo Plus Product Description Page - Sewing Basket"}
                  buttonLabel={<img src="images/sewingBasket.png" alt="Juvo Plus Product Description Page - Sewing Basket" />}
                  modalBody={<img src="images/sewingBasket.png" alt="Juvo Plus Product Description Page - Sewing Basket" />}
                  className="work-modal image-modal"
                />
              </div>
            </div>
          </div>
          <div className="insert-102 insert-102-d">
            <div className="insert-103 insert-103-a">
              <h4>Torrid Paid Ads</h4>
            </div>
            <div className="insert-103 insert-103-b">
              <div className="insert-104 insert-104-a">
                <Modal
                  size={"xl"}
                  modalHeader={"Torrid Paid Ads"}
                  buttonLabel={<img src="images/torridPaidAds.png" alt="Torrid Paid Ads First Example" />}
                  modalBody={<img src="images/torridPaidAds.png" alt="Torrid Paid Ads First Example" />}
                  className="work-modal image-modal"
                />
              </div>
              <div className="insert-104 insert-104-b">
                <Modal
                  size={"xl"}
                  modalHeader={"Torrid Paid Ads"}
                  buttonLabel={<img src="images/torridPaidAds2.png" alt="Torrid Paid Ads Second Example" />}
                  modalBody={<img src="images/torridPaidAds2.png" alt="Torrid Paid Ads Second Example" />}
                  className="work-modal image-modal"
                />

              </div>
              <div className="insert-104 insert-104-c">
                <Modal
                  size={"xl"}
                  modalHeader={"Torrid Paid Ads"}
                  buttonLabel={<img src="images/torridPaidAds3.png" alt="Torrid Paid Ads Third Example" />}
                  modalBody={<img src="images/torridPaidAds3.png" alt="Torrid Paid Ads Third Example" />}
                  className="work-modal image-modal"
                />
              </div>
            </div>
          </div>
          <div className="insert-102 insert-102-e">
            <div className="insert-103 insert-103-a">
              <h4>Torrid Product Description Pages (PDPs)</h4>
            </div>
            <div className="insert-103 insert-103-b">
              <div className="insert-104 insert-104-a">
                <Modal
                  size={"xl"}
                  modalHeader={"Torrid Product Description Pages (PDP)"}
                  buttonLabel={<img src="images/torridPdp1.png" alt="Torrid PDP First Example" />}
                  modalBody={<img src="images/torridPdp1.png" alt="Torrid PDP First Example" />}
                  className="work-modal image-modal"
                />
              </div>
              <div className="insert-104 insert-104-b">
                <Modal
                  size={"xl"}
                  modalHeader={"Torrid Product Description Pages (PDP)"}
                  buttonLabel={<img src="images/torridPdp2.png" alt="Torrid PDP Second Example" />}
                  modalBody={<img src="images/torridPdp2.png" alt="Torrid PDP Second Example" />}
                  className="work-modal image-modal"
                />
              </div>
            </div>
          </div>
          <div className="insert-102 insert-102-f">
            <div className="insert-103 insert-103-a">
              <h4>Unique Vintage Product Description Pages (PDPs)</h4>
            </div>
            <div className="insert-103 insert-103-b">
              <div className="insert-104 insert-104-a">
                <Modal
                  size={"xl"}
                  modalHeader={"Unique Vintage Product Description Pages (PDP)"}
                  buttonLabel={<img src="images/uvPdp1.png" alt="Unique Vintage PDP First Example" />}
                  modalBody={<img src="images/uvPdp1.png" alt="Unique Vintage PDP First Example" />}
                  className="work-modal image-modal"
                />
              </div>
              <div className="insert-104 insert-104-b">
                <Modal
                  size={"xl"}
                  modalHeader={"Unique Vintage Product Description Pages (PDP)"}
                  buttonLabel={<img src="images/uvPdp2.png" alt="Unique Vintage PDP Second Example" />}
                  modalBody={<img src="images/uvPdp2.png" alt="Unique Vintage PDP Second Example" />}
                  className="work-modal image-modal"
                />
              </div>
              <div className="insert-104 insert-104-c">
                <Modal
                  size={"xl"}
                  modalHeader={"Unique Vintage Product Description Pages (PDP)"}
                  buttonLabel={<img src="images/uvPdp3.png" alt="Unique Vintage PDP Third Example" />}
                  modalBody={<img src="images/uvPdp3.png" alt="Unique Vintage PDP Third Example" />}
                  className="work-modal image-modal"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="print" className="sec sec-2">
        <div className="insert-101 insert-101-a">
          <Header title="Print" />
        </div>
        <div className="insert-101 insert-101-b">
          Tangible brand marketing that calls for creativity and collective collaboration.
        </div>
        <div className="insert-101 insert-101-c">
          <div className="insert-102 insert-102-a">
            <div className="insert-103 insert-103-a">
              <h4>Torrid Spring 2020 Mailer</h4>
            </div>
            <div className="insert-103 insert-103-b">
              <div className="insert-104 insert-104-a">
                <Modal
                  size={"xl"}
                  modalHeader={"Torrid Spring 2020 Mailer"}
                  buttonLabel={<img src="images/torridMailer1.png" alt="Torrid Spring 2020 Mailer First Example" />}
                  modalBody={<img src="images/torridMailer1.png" alt="Torrid Spring 2020 Mailer First Example" />}
                  className="work-modal image-modal"
                />
              </div>
              <div className="insert-104 insert-104-b">
                <Modal
                  size={"xl"}
                  modalHeader={"Torrid Spring 2020 Mailer"}
                  buttonLabel={<img src="images/torridMailer2.png" alt="Torrid Spring 2020 Mailer Second Example" />}
                  modalBody={<img src="images/torridMailer2.png" alt="Torrid Spring 2020 Mailer Second Example" />}
                  className="work-modal image-modal"
                />
              </div>
              <div className="insert-104 insert-104-c">
                <Modal
                  size={"xl"}
                  modalHeader={"Torrid Spring 2020 Mailer"}
                  buttonLabel={<img src="images/torridMailer3.png" alt="Torrid Spring 2020 Mailer Third Example" />}
                  modalBody={<img src="images/torridMailer3.png" alt="Torrid Spring 2020 Mailer Third Example" />}
                  className="work-modal image-modal"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="social" className="sec sec-3">
        <div className="insert-101 insert-101-a">
          <Header title="Social" />
        </div>
        <div className="insert-101 insert-101-b">
          Looking for creative and strategic social content? Copy that.
        </div>
        <div className="insert-101 insert-101-c">
          <div className="insert-102 insert-102-a">
            <div className="insert-103 insert-103-a">
              <h4>Torrid Email - Star Wars</h4>
            </div>
            <div className="insert-103 insert-103-b">
              <div className="insert-104 insert-104-a">
                <Modal
                  size={"xl"}
                  modalHeader={"Torrid Email - Star Wars"}
                  buttonLabel={<img src="images/torridStarWars.png" alt="Torrid Email - Star Wars" />}
                  modalBody={<img src="images/torridStarWars.png" alt="Torrid Email - Star Wars" />}
                  className="work-modal image-modal"
                />
              </div>
            </div>
          </div>
          <div className="insert-102 insert-102-b">
            <div className="insert-103 insert-103-a">
              <h4>Torrid Instagram Story - Cinderella</h4>
            </div>
            <div className="insert-103 insert-103-b">
              <div className="insert-104 insert-104-a">
                <Modal
                  size={"xl"}
                  modalHeader={"Torrid Instagram Story - Cinderella"}
                  buttonLabel={<img src="images/torridCinderella.png" alt="Torrid Instagram Story - Cinderella" />}
                  modalBody={<img src="images/torridCinderella.png" alt="Torrid Instagram Story - Cinderella" />}
                  className="work-modal image-modal"
                />
              </div>
            </div>
          </div>
          <div className="insert-102 insert-102-c">
            <div className="insert-103 insert-103-a">
              <h4>Torrid Instagram Story - Birds of Prey</h4>
            </div>
            <div className="insert-103 insert-103-b">
              <div className="insert-104 insert-104-a">
                <Modal
                  size={"xl"}
                  modalHeader={"Torrid Instagram Story - Birds of Prey"}
                  buttonLabel={<img src="images/birdsOfPrey.png" alt="Torrid Instagram Story - Birds of Prey" />}
                  modalBody={<img src="images/birdsOfPrey.png" alt="Torrid Instagram Story - Birds of Prey" />}
                  className="work-modal image-modal"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div >
  );
}

export default Work;
