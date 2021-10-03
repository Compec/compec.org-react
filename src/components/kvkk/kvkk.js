import React from 'react';
import { Helmet } from 'react-helmet';
import '../events/events.css'

function KVKK() {
    return (
        <div class="container">
            <Helmet>
                <title>KVKK Aydınlatma Metni - Boğaziçi Üniversitesi Bilişim Kulübü</title>
                <meta
                    name="description"
                    content="Boğaziçi Üniversitesi Bilişim Kulübü'nün KVKK aydınlatma metnidir."
                />
            </Helmet>
            <div class="row">
                <div class="col">
                    <h1>KVKK Aydınlatma Metni.</h1><br />
                    <p>
                        Boğaziçi Bilişim Ödülleri, 2014'ten bu yana her yıl bilişim ve teknoloji alanında profesyonellerin ve kurumların
                        ödüllendirildiği bir ödül törenidir. Ödüllerin kazananları, geniş çaplı bir halk oylaması ile 20 günlük bir süreçte belirlenir.
                        Kasım ayının başında başlayan oylama süreci, Aralık ayının ilk haftasında sonlanır ve kategori kazananları belirlenir.
                        Oylama süreci farklı ülkelerden kullanıcılar tarafından internet sitesi üzerinden gerçekleştirilir. Adaylar halk oylamasının
                        yanı sıra alanında uzman kişilerin yer aldığı jüri tarafından oylanır.
                        2019 yılında düzenlenen, Boğaziçi Caz Ensemble'ın ve yirmi7'nin yaptıkları müzik dinletileriyle ile renk kattığı ödül töreninde ödül
                        sahipleri, Yunus Günçe'nin sunuculuğunda ödülleriyle buluştu. Bu sene yine Aralık ayında 8.'si düzenlenecek olan ödül töreni,
                        bilişimin enlerine ev sahipliği yapacak.
                    </p>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default KVKK;