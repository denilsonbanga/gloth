
import React, { useState } from 'react';
import { FlatList, View, Text, TextInput } from 'react-native';


import { css } from '../assets/css/Css'

export default function Home(props) {

  const dados = [
    { name: 'Abaixar', value: 'Tutula, Betama, Butala. ',kikongo:' Kulula, Vetama, Betuka, Zembeka ' },
    { name: 'Abaixo', value: 'Boxi, Kuluiji, Koxi.; ',kikongo:' Kuianda, Munxi, Vaianda, Kusolokelu.' },
    { name: 'Abalar', value: 'Katuka, Tingita, Xatuka.',kikongo:' Nukuna, Titisa, Xina.' },
    { name: 'Abanar', value: 'Buka, Soka, Pepelela.',kikongo:' Piata, Vemuna, Vuvila, Lema, Bubama.' },
    { name: 'Abandonar', value: 'Eha, Lémbua, Senga-Bangika.',kikongo:' Veza, Lanvula, Xila, Tina.' },
    { name: 'Abandonado', value: 'Uahukunhi, Muri, Xiona',kikongo:' Uaiambúlua, Uakulúa' },
    { name: 'Abarrotar', value: 'Izala, Izalesa, Toxala.',kikongo:' Zala, Safula, Zalisa, Zadisa.' },
    { name: 'Abastecer', value: 'Ta Mbanzu, Sondama, Diteka',kikongo:' Kudisansa, Bulumuna, Kudiambula.' },
    { name: 'Abater', value: 'Jiba, Batela, Bondela.',kikongo:' Vonda, Buisa, Kulula.' },
    { name: 'Abatido', value: 'Labele, Uabehe.',kikongo:' Mangunu, Atanda, Uanienga.' },
    { name: 'Abcesso', value: 'Kijimbu, Dimbu.',kikongo:' E Taza, Lunetu, Evunbu. ' },
    { name: 'Abdicar', value: 'Katuka Kisoba, Lêmbua. ',kikongo:' Kadila,Tumbúka, Kilémbua.' },
    { name: 'Abençoar', value: 'Zedíua, Bonza, Kondeka.',kikongo:' Vuika, Tulula.' },
    { name: 'Abençoado', value: 'Uazediua, Uatôndua.',kikongo:' Uasambúlua, Kiasambúlua.' },
    { name: 'Aberto', value: 'Iojukule, Uajikuka, Kiapengula',kikongo:' Uajúka, Kiajikuka, Kievundu.' },
    { name: 'Abolir', value: 'Jima, Mana.',kikongo:' Kunguna, Tadila, Katula.' },
    { name: 'Abominação', value: 'Kisalangu, Kisulukutu.',kikongo:' Fu Kia Kula, Fu Kia Lundumuna.' },
    { name: 'Abominar', value: 'Kuma, Zemba.',kikongo:' Núkua, Uumbika, Saula.' },
    { name: 'Abordar', value: 'Zama, Bíxila.',kikongo:' Totana, Luakila, Kuaka, Iekama.' },
    { name: 'Aborrecer', value: 'Zemba, Ibila, Dibuíza.',kikongo:' Núkua, Safuka, Zezela.' },
    { name: 'Aborto', value: 'Kiselu, Kuseluka, Kilute.',kikongo:' Lubulu' },
    { name: 'Abraço', value: 'Ndandu, Kandandu.',kikongo:' Mbimbakanu, Luananu, Lutotanu.' },
    { name: 'Abraçar', value: 'Bubala, Lubata, Dilekela.',kikongo:' Bimbana, Bimba, Bimbakana.' },
    { name: 'Abrandar', value: 'Beleketa, Buíka, Jaja.',kikongo:' Lembeka, Kulula, Zezesa.' },
    { name: 'Abrir', value: ' Jikula, Banúna, Papumana.',kikongo:' Vembeka, Pakuna, Bundula.' },
    { name: 'Absolver', value: 'Loloka, Lolokela, Bulula.',kikongo:' Lambula, Vezela, Vuaxila.' },
    { name: 'Absorver', value: 'Amua, Bonda, Fefenha.',kikongo:' Vambuka, Iumisa, Lamisa, Minima.' },



    { name: 'Baço', value: 'Ndombe, Juenge.',kikongo:' Vaxi, Bekele, Kiafuitu.' },
    { name: 'Bacorinho', value: 'Kangulu, Kamona. ',kikongo:' Kaleitão, Kabaku.' },
    { name: 'Báculo', value: 'Kilunga, Dikóue. ',kikongo:' Bungu, Nxi a koko.' },
    { name: 'Badalada', value: 'Ngunga.',kikongo:' Kingunga.' },
    { name: 'Badalar', value: 'Xika, Ngongola. ',kikongo:'  Sika, Dodela, Zungana, Bolongonza.' },
    { name: 'Badaleiro', value: 'Musiki, Ndolo, Múkua-Dkanu. ',kikongo:' Unxiki,Unxiki a Kingunga ' },
    { name: 'Badalo', value: 'Ndanji, kuxika Ngumga.',kikongo:' Luiembelu, Lutoteku Lunukuinu.' },
    { name: 'Bafejar', value: 'Haha, Buseleia, Miona.',kikongo:' Ximbisa, Vevumuka, Sadisa.' },
    { name: 'Bafio', value: 'Musuta, Fundungulu, Zimbadimuha. ',kikongo:' Unfudangu.' },
    { name: 'Bafo', value: 'Muza, Muha, Muenhu. ',kikongo:' Lutambuisu, Luximbisu.' },
    { name: 'Bagaço', value: 'Kafi, Ikami, Kikaxi. ',kikongo:' Lubidiku,. ' },
    { name: 'Bagagem', value: 'Kikumba,imbamba,Ikuafa, Imbende. ',kikongo:' Bima.  ' },
    { name: 'Baixo', value: 'Uabutu, Uahonga, Uangadiama. ',kikongo:' Akuluka, Kuxira, Kiakete. ' },
    { name: 'Bajulador', value: 'Kimbundo:Sébue. ',kikongo:' Unlenvudi, Unkembi. ' },
    { name: 'Bajular', value: 'Dimbambela, Bandamutu, Leba, Lesa. ',kikongo:' Vinginina, Vuemukina, Vukumuina. ' },
    { name: 'Bala', value: 'Kabila, Solo. ',kikongo:' Tuco, Ekela, Mpunza. ' },
    { name: 'Balança', value: 'Pesesu.  ',kikongo:' Fuanisa, Pezu.  ' },
    { name: 'Balcão', value: 'Bálakelu, Vetekelu. ',kikongo:' Báia.  ' },
    { name: 'Balde', value: 'Mbáliti, Kizenzu, Kazenzu, Kitabelu. ',kikongo:' Zila, Dikinda, Sakuamuna.  ' },


    {name:'Bandeira', value:'Dibandela, Kipepumunu, Ndimbu ia fuka.' , kikongo:' Bandela, Ketembe, Luzailu.'},

    {name:'Bandido', value:'Kingulungumba, Kifumbe.' , kikongo:'Kimpumbulu, Kabuka, Mbandi.'},
  
    {name:'Banco', value:'Mbandu, Ngonge, Kitomba, Nzemba.' , kikongo:'E simu, Ndambu, Luxombolo, Nkoko, Mpeta.'},
  
    {name:'Banana', value:'Dihonjo, Dikonde, Kasoko.' , kikongo:'Tiba, Dikonde, Xiba, Lende, Nlemu a tía.'},
  
    {name:'Barata', value:'Dibalata, Lupeka, Lupenhe, Penha, Pese, Pelekese.' , kikongo:'Mpese, Luienu, Lututu.'},
  
    {name:'Barba', value:'Muezu, Kikamba.' , kikongo:'Bobo, Nzevu, Kisafa, Kienge.'},
  
    {name:'Barato', value:'Kiafika, Kialeluka, Utinga.' , kikongo:'Kiakeva, Anfiku, Nsendu, Ntalu ia kete, Kiantalu ia kukuka.'},
  
    {name:'Baba', value:'Nzebu, nzébue, Ifulu,Mate.' , kikongo:'Mete, Meta, Njembe, Luzembe, Nzembu, Fulu-fulu.'},
  
    {name:'Babado', value:'Kianzébue, Ió Uamububa mate mu dikanu.' , kikongo:'Kiatufina, Kiabolongo, Kiapuatama.'},
  
    {name:'Bacia', value:'Dilongo, Mbaxinha.' , kikongo:'Bola, Kuúua, Nsunga, E longa.'},
  
    {name:'Bacio', value:'Dilongo, Kibungo.' , kikongo:'Luenga Lua Subila Iovo lua nenena,Subila.'},
  
    {name:'Bafo', value:'Muza, Muha, Muenhu.' , kikongo:'Muela luvumu, Lutambuluísu, Luximbisu. '},
  
    {name:'Baixa', value:'Honga, Mbuelu, Ndamba.' , kikongo:'Lukululuku, Nkoko, Lukevesu, Fulu kia kuluka.'},
  
    {name:'Baixar', value:'Betama, Kulumuisa, Tepula, Petama, Kuluka.' , kikongo:'Kulula, Fukama, Beluka, Vetama, Kundika, Veteka.'},
  
    {name:'Barra', value:' Kisasamba, Muxinda, Ditakunenu.' , kikongo:'Mbindi, Lukumbu, Nsuku, E senselu.'},
  
    {name:'Barraca', value:'Tundu,Dikumbi, E vundilu, Kisasamba, Tutulu.' , kikongo:'Balaka, Nzo a Nlele, E tamba, Saba, Kanzo ka mabáia, Lubolo,Kanzo ka vuvama.'},
    
    {name:'Barrar', value:'Beba, Bebeka.' , kikongo:'Beteka, Xuuluíla, Tapika, Lukakilu.'},
  
    {name:'Barreira', value:'Kipaka, Kibanga, Kibatu.' , kikongo:'Veúlu, Dungungu, E bongelu dia nteke.'},
  
    {name:'Barriga', value:'Divumu, Dimala, Rikebe.' , kikongo:'Vumu, LubuMbamu, Kebe, Luimitu.'},
   
   {name:'Barriguda', value:'Kirivumu, Divumu diedi ngaba-ngaba ni Kúdia, mala adikota.' , kikongo:'Kavumu, Vumu ia mpeuena, Uukuta, Luimitu.'},
  
    {name:'Barrigudo', value:'Múkua-divumu dionene, Mutu ni kidivumu, Mukua-dila dionene.' , kikongo:'Una ei vumu kia vimba, îtalala e vumu, Uakankuka e vumu.'},
  
    {name:'Barulho', value:'Nzanga, Jibúia, Ngololo, Nvunda, Nzangu, Muanji.' , kikongo:'Mazu, Ungolo, Ntantani, Luboko, Miangu, Luílu, Nvita, Luvovo, Lusoselu.'},
  
    {name:'Base', value:'Mbetekete, Kikota,Kikotongo, Nkulu, E bulu, Mbanjidilu, Ndanji.' , kikongo:'E sina, Luiekelu, Nkubílua, Lubuminu, Kiandekele.'},
  
    {name:'Bastante', value:'Kiavulu, Kinene, Kabasâ.' , kikongo:'Afuana, Kiauokela, Fuanu, Kiampuena, îngi, Kiabeta, Kialuta.'},
  
    {name:'Bata', value:'Lasá Kifutu, Kúdia, Kisakidilu.' , kikongo:'Lenga, Nvuatu, Nvuatu ua kula, Iunga, Kinkutu kiakula.'},
  
    {name:'Batalha', value:'Gela, Ita, Kulaka, Lunda, Kubentana, Kaúka, Kikaxi.' , kikongo:'Nvita, Nzingu, Lunuana,Luiembu.'},
  
    {name:'Batalhar', value:'Betana,Lúa, Bangagela.' , kikongo:'Nuana, Uandana, Nungajana e Nkomi.'},
          
    {name:'Batata', value:'Mbatata, Mbonzo, Karingu.' , kikongo:'Mbala, Lenge-lenge.'},
  
    {name:'Bater', value:'Popa, Pupa, Beta, Sula, Xina.' , kikongo:'Uanda, uândama, Koma, Ueta, Teva.'},
  
    {name:'Bateria', value:'Batadía' , kikongo:'Nvunda, Kibeta.'},
  
    {name:'Batota', value:'Panza, Mbonzo, Uadi.' , kikongo:'Luuílu luata, Luta lua Vonza.'},
  
    {name:'Batotar', value:'Ta Panza, Ta uadi.' , kikongo:'Ta e divuninu.'},
  
    {name:'Batuque', value:'Ngoma, Kindungu,Kukina, Lukinu, Kipuita.' , kikongo:'makinu, ludeku.'},
  
    {name:'Bebê', value:'Kamona, Mona a ndengue.' , kikongo:'Muana, Muana akete, Kindende.'},
  
    {name:'Bebedeira', value:'Uhólua,Lunkólua, Tumbendu, Kúnua.' , kikongo:'Lukólua, Tumbendu, Luzendengu.'},
  
    {name:'Ensinar', value:'Longa, sasa, Ndogixi, Dimina.' , kikongo:'Sansa, Lôngoka, Temunuisa, Jukula e lunji, Vangamesa.'},
  
    {name:'Ensaiar', value:'Dilonga,Vovolola, Longesa.' , kikongo:'Teza, Tezena, Vovolola, Longesa.'},
  
    {name:'Ensaio', value:'Kufikisa, Kuenga.' , kikongo:'Kufikisa, Ebalukisa, Mpovolola.'},
  
    {name:'Ensinador', value:'Ndongixi,Ubana Kuijia,Mésene.' , kikongo:'Nlongi, Nsanxi, Nlóngoki.'},
  
    {name:'Ensino', value:'Kulonga, Ulongelu.' , kikongo:'Lilongesu, Lucaisu.'},
  
    {name:'Ensinamento', value:'Kulonga, Ulongelu, Dilongelu, Mulongi, Kikombo.' , kikongo:'Lilongesu, Lucaisu, Fu kia Longela.'},
  
    {name:'Enrolar', value:'Vinda, Vindumuna, Buririka, Nhinga, Nhingika.' , kikongo:'Fitijoka, Losela, Bangumuna, Vindumuna.'},
  
    {name:'Então', value:'Anga, Anda, Inga, Abandá, Kaxi, Ze, Pe, Mbebu.' , kikongo:'Ibosi, Uáu, Unki, Dianu vo, Sumba.'},
    
    {name:'Enterrar', value:'Funda, Fundila, Vumbika, Lamba, Hinda.' , kikongo:'Jika, Zika, Lakila mu mavu, Vumba munxi a mavu.'},
  
    {name:'Enterro', value:'Kifundu, Tambi, Kufa, Kihindu, Kubaka.' , kikongo:'Luziku, LuvuMbiku, Ntambi.'},
  
    {name:'Entrar', value:'Bokola, Bokona, Bokueza, Bita.' , kikongo:'Kota, Kotela, Dimina.'},
  
    {name:'Entidade', value:'Mutu Umoxi, Umoxi, KUkala, Ene.' , kikongo:'Muntu umoxi eki kisongela lukalu lua kima, Lukadilu.'},
  
    {name:'Entoar', value:'Bana muimbu, mateka kuimba, Mateka muimbu.' , kikongo:'Vulumuna, Kusumuna, Sia e vunu.'},
  
    {name:'Entornar', value:'Xamuna, Xamuina, Muanga, Lundulula, Nûa luavulu.' , kikongo:'Muangana, Muanginika, Uixila, Itika, Vutukila, Tempula.'},
  
    {name:'Entre', value:'Buaxaxi, Buaxaxi ka, Bu kaxi.' , kikongo:'Vakaxi, Munxi, Vaxinu.'},
  
    {name:'Entretanto', value:'Akiki, Anga, Mbambe, Hinu, Ki, Kioso.' , kikongo:'Mukaxi Kakiókio, Muna kolo kiókio, Kiatuminu, Kiantángua.'},
  
    {name:'Entrevista', value:'Kundu, Kudisanga kua Umesene, Kutakana bu muadiambela.' , kikongo:'Lutangelu, Lutangumunu, Lusamuínu, Luxikidisu.'},
  
    {name:'Entrever', value:'Mona bila, Mona lusolo, Muena.' , kikongo:'Xisa e disu, Longoluensa, Fufitila, Kudiuúia.'},
  
    {name:'Entregar', value:'Telekala, Ba, Bana, Tambeka, Tambuisa, Xila.' , kikongo:'Ueta tambika, Véua, Vânika, Vutula, Iekula.'},
  
    {name:'Esbanjar', value:'Zanga, Ngastala, Sana jimbote, Nhona, Besela.' , kikongo:'Uola, Sana, Fuisa, Nunka, Muangisa.'},
  
    {name:'Esbarrar', value:'Balakanha, Ditexi, Jimbila Njila.' , kikongo:'Uanana, Totana, Fionka.'},
  
    {name:'Esboçar', value:'Handeka, Xinda mu anda kubitila kikalakalu.' , kikongo:'Uaxika, Zaisa, Muenesa, Fikisa, Katula eteke.'},
  
    {name:'Esboço', value:'Kubandeka, Kibangu kia muxinji, Kuta mitutu, Kitetu kia mumba.' , kikongo:'Fikula iabandúlua mu lapi, Lutapi, Ndimbu, Lukasu, Uteke kia lanvikua.'},
  
    {name:'Escada', value:'Xikata, Dilondelu, Kibandelu.' , kikongo:'Kima kia bandila, Emantinu, Luzanjilu, Kikada.'},
  
    {name:'Escalamento', value:'Kukala.' , kikongo:'Fu kia zanzamena, Luzanzamu.'},
  
    {name:'Escalar', value:'Zúa, Banda, Kala.' , kikongo:'Sunda, Dumuisa, Zanzama, Puakesa, Ianga.'},
  
    {name:'Escamar', value:'Kulula, Tetula.' , kikongo:'Vala, Kuana, Laleka.'},
  
    {name:'Escamas', value:'Ibalabala.' , kikongo:'Mavaku,Vesu, Matesa, Makuana.'},
  
    {name:'Escapar', value:'Bulaka, Buluka, Láia, Lueza, Xongomoka, Vuluka, Bita, Lenga.' , kikongo:'Vuluza, Tinisa, Xinisa, Taiisa, Kutisua.'},
  
    {name:'Escapatório', value:'Kikisoko, Ki-tutena, Kuxikana, Kitena Kubuluka, Sembele.' , kikongo:'Unvuluki, Kiabuisa, Kilenda ovuluka, Kiasafuka, Kiaxitila.'},
  
    {name:'Escape', value:'Ditundilu, Ubuluilu, Ulengelu.' , kikongo:'Evaikilu, Etundilu, Lukionu, Fu kia kutumukina.'},
  
    {name:'Escandâlo', value:'Kubana milongi iaíba kua mukuetu, Kubukanesa.' , kikongo:'Ebumbu, Tesa, Sngo e fu iambi.'},
  
    {name:'Escandaloso', value:'Kitondalesa, Kibeka mu njila iaíba, Múkua-kufudisa.' , kikongo:'Umbenvuni, Unvukumuni.'},
  
    {name:'Escarrar', value:'Kalala, Kalumuna, Tu-bula bu kanu mba bu xingu.' , kikongo:'Kualumuna, Iaula, Tauluila, Kuana, Vuxila, Kofona.'},
  
    {name:'Escarro', value:'Kixinda, Dikeku, Kalumunu.' , kikongo:'Luakuamu, Lukalumunu, Lukofono.'},
  
    {name:'Escassez', value:'Kukamba, Kukambela, Kikala, Ukambu, Kupopama.' , kikongo:'Kima kiakete, Kuabuila, Muimi, Kándua, Suisa.'},
  
    {name:'Escasso', value:'Kiapéngula, Kiofele, Kiala ofele, Kiakamba, Kikivudila, Kinjenje.' , kikongo:'Kiabamina, Amuini, Kiakeye, Kiakámbua.'},
  
    {name:'Escavação', value:'Kipaka, Kifukinu.' , kikongo:'Fu kia budila iovo kia kavila, Lukatulu lua mavu, Luvumbulu.'},
  
    {name:'Escavar', value:'Fukina, Fukuna, Dimina, Kanda.' , kikongo:'Fula, Tuila, Vasuna, Katula o mavu.'},
  
    {name:'Escoamento', value:'Kuboloka, Kujikinina, Kukouala, Kuehesa kubita bofele-bofele.' , kikongo:'Fu kia sengela, Nkulumuna.'},
  
    {name:'Escoar', value:'Kenxa, Uáia, Zúua.' , kikongo:'Sosesa, Lutuila, Sonsena, Senga.'},

    {name:'Escola', value:'Xikola, Inzo ia longela.' , kikongo:'Sikola, Nzo ia longéla, Nzo ia nzaila.'},
  
    {name:'Escolha', value:'Kusola, Usolelu, Kunona.' , kikongo:'Lusolu, Lunonu, Luungilu, Luvambulu.'},
  
    {name:'Escolher', value:'Sola Nona, Ximbula, Banda, Bungula.' , kikongo:'Tumba, Vambula, Vévua.'},
  
    {name:'Escolhido', value:'A-mu-solo, Kisole, A-mu-sondolola mu kilunga kia akuá, Kabenda.' , kikongo:'Kiasólua, Kianónua, Kiavévua.'},
  
    {name:'Esconder', value:'Sueka, Suekela, Lengesa, Batama.' , kikongo:'Fuka, Fukidila.'},
  
    {name:'Escorregar', value:'Xangumoka, Huluka, Zuluka, Selumuka, Xelumuka, Sunuka, Kualumuka.' , kikongo:'Sielumuka, Sumuka, Kualumuka, Kunhumuka, Xendeuka, Piatisa.'},
  
    {name:'Escorrer', value:'Buba, Bubisa, Zunza, Zúua, Dizuuila, Ndonda.' , kikongo:'Kienza, Kama, Vuisa, Naxisa, Uixila, Sonsela.'},
  
    {name:'Escova', value:'Xikova, Muindu, Kikuvalu.' , kikongo:'Jikova, Sanu kiampuena, Lusekelu.'},
  
    {name:'Escovar', value:'Kuvala, Kondona, Kukumuns, Kubula.' , kikongo:'Kúnguna e lékua iovo o nvuatu, kubula, Seka, Tukuta.'},
  
    {name:'Escravatura', value:'Kiiamba, Ubika, Ukuikilu.' , kikongo:'Ubiki, Ubundu, Uuáii.'},
  
    {name:'Escravidão', value:'Kibka, Ubika, Ukuikilu.' , kikongo:'Ebolo, Mpila ia dibolo, Mpila ia pelezu.'},
  
    {name:'Escravizar', value:'Bengesa, Mubika, Bika, Bikisa, Banga ubika.' , kikongo:'Vanga umbundu, Bubisa, Zanguisa, Kuvisa.'},
  
    {name:'Escravo', value:'Mubika, Ubika, Mupika, Musumbe, Nekulu.' , kikongo:'Mbika, Mika, Nsumbi, Mbuindu.'},
  
    {name:'Escritório', value:'Inzo ia mikanda, Onzo io kusonena.' , kikongo:'Disonemu, Nzo ia sonena.'},
  
    {name:'Escritura', value:'Kisoneku, Ndukumendu.' , kikongo:'Nkanda ua nfunu, Sono.'},
  
    {name:'Escudo', value:'Málaka, Ngubu.' , kikongo:'Vanza, Utona.'},
  
    {name:'Ferida', value:'Fidila, Dibude, Falanji, Kilonda.' , kikongo:'Vuma, Mpuma, Mukela, Kitalakamba.'},
  
    {name:'Ferido', value:'Kiahuhi, Kikuame.' , kikongo:'Nduadi, Unluadi, Mbevu, Unkualumuka.'},
  
    {name:'Ferimento', value:'Kilonda, Kibetu, Mbole.' , kikongo:'Olueka, Lulueku, Lubavu.'},
  
    {name:'Ferir', value:'Ta fidika, Kuama, Xangumuna, Luualela.' , kikongo:'Lueka, Muluekele, Luana, Telesa.'},
  
    {name:'Féria', value:'Kizúa kia sumanu, Nganhu.' , kikongo:'Lumbu kia semana, Luvundu, Nfutu ia minsadi.'},
  
    {name:'Feriado', value:'Kizúa kia nhoka, Kizúa kia fesa' , kikongo:'Luvundu, Lunangu.'},
  
    {name:'Feio', value:'Kiaíba, Uaíba, Muíbi.' , kikongo:'Uambi, Uambi-uambi, ambi, Alulu.'},
  
    {name:'Feira', value:'Kitanda, Kinanga, Mutanda.' , kikongo:'Mutamba, Ezandu, Fulu kia tekela.'},
  
    {name:'Feitiçaria', value:'Kipeteka, Umbanda.' , kikongo:''},
  
    {name:'Feiticeiro', value:'Muloji, Nganga, Kihuende.' , kikongo:'Kimbanda, Ndoki, Mbiki, Untantu, Nloji.'},
  
    {name:'Feitiço', value:'Kiteke, Kizangu, Uanga, Mukixi.' , kikongo:'Nkisi, Mpandu, Manga, Ndoki.'},
  
    {name:'Feitio', value:'Kifua, Ubangelu.' , kikongo:'Mpila, Lukeketu, Lutomesu.'},
  
    {name:'Feito', value:'Ubange, Kiabangíua, Kalakale, Kikalakari.' , kikongo:'Kivangilu, Kiavángua, Kiavangíua, Kiasadíua.'},
  
    {name:'Feliz', value:'Uatana.' , kikongo:'Kiakuluka, Elau.'},
  
    {name:'Fezes', value:'Matuji, Maxanda, Ivunzu, Ixix, Isenga.' , kikongo:'Makafi, Vindu, Lumaninu.'},
  
    {name:'Fevereiro', value:'Dijina dia mbeji, Mbeji ia muanha.' , kikongo:'Ngonde ia muíni.'},
  
    {name:'Ficar', value:'Xala, Fama, Suva.' , kikongo:'Kala, Manga, Nangina, Vuanda.'},
  
    {name:'Fiança', value:'Kífua kia kubota, Kisungi.' , kikongo:'Fu kia devesa, Devesu, Ludisu.'},
  
    {name:'Ferramenta', value:'Falamenda, Ikuata, Itele, Kikete, Ima ia kutalaváia.' , kikongo:'Imbamba, Esadilu.'},
  
    {name:'Ferrar', value:'Lumata, Numata, Nganga, Suma, Baka.' , kikongo:'Fiobesa io manga.'},
  
    {name:'Festa', value:'Kizomba, Fesa, Kusamba.' , kikongo:'Nkinzi, Nkembu, Lukembu.'},
  
    {name:'Fervura', value:'Kutema.' , kikongo:'Luidinu.'},
  
    {name:'Gratidão', value:'Kisakidilu, Kitonda, Kiximanu.' , kikongo:'Tombelo, Etondo, Lusakidilu.'},
  
    {name:'Gratificar', value:'Senda, Sakidila, Bana, Kitadi mba matabisu.' , kikongo:'Vana e nfuru, Tonda e mbote, Iambuila.'},
  
    {name:'Gratificação', value:'Diláu, Kisakidilu, Kifutu.' , kikongo:'Tadi, Nfutu, Matabisu.'},
  
    {name:'Grátis', value:'Kiobange anga kiobane ngó, Kinama, Kia henda.' , kikongo:'Angovo, Kienana, Kiankutu, Kia nkenda.'},
  
    {name:'Grato', value:'Uasakidila, Mutdonde, Kiahatu.' , kikongo:'Kiasakidila, Kiatondela, Antondi.'},
  
    {name:'Gratruitamente', value:'Ngó, Ngoho, Kingó.' , kikongo:'Kiamuende, Malopa, Kiankailua.'},
  
    {name:'Gratuito', value:'Ngó,Ngoho, Ngókio.' , kikongo:'Kia nkatu, Angovo.'},
  
    {name:'Grávida', value:'Uatámbula o mona.' , kikongo:'Nkentu uabubalala evumu.'},
  
    {name:'Grave', value:'Téia-téia.' , kikongo:'Kiampuena-Mpuena.'},
  
    {name:'Gravar', value:'Tala, Seta.' , kikongo:'Muesa o makaxi.'},
  
    {name:'Gravidade', value:'Kijingu.' , kikongo:'Lunetu, Ujitu.'},
  
    {name:'Gravata', value:'Kibetu kia xinga.' , kikongo:'Tembe kia laka.'},
  
    {name:'Gravidez', value:'Kimitu, Támbula mona mu divumu.' , kikongo:'Iámubla muana vua divumu. '},
  
    {name:'Greve', value:'Kipapa, Ndumba iákua-kukalakala adituna kubanga silivisu se miadi iá kabangele kiandulu kiá, kipalalesu, Kia kikalakula.' , kikongo:'Kuxinda, Njingu mia vova, Ntikumuka asunga kia nsadi, Kemesa buka kia antu kiadikuuanana ualesa e salu.'},
  
    {name:'Grossaria', value:'Kikuba, Makuba, Makoza.' , kikongo:'Vonga, Nneta, Mambu makámbua o lujitu.'},
  
    {name:'Grosseirão', value:'Mbalu, mutu sê kilunji nê ulongelu, Múkua-muxitu.' , kikongo:'Uavonga Kuingi, únkuanfinda, Kipombo.'},
  
    {name:'Grosseiro', value:'Mbuanza, Kimbumbulukutu.' , kikongo:'Nvuanvuala, Zengi.'},
  
    {name:'Gritar', value:'Dila, Kola, Kolela, Boka.' , kikongo:'Dila kuingi, Kololoka, Kaza, Tala.'},
  
    {name:'Gritaria', value:'Ngololo, Kingololo.' , kikongo:'Lubokelu, Kololoka, Lunanamu.'},
  
    {name:'Grito', value:'Mbimbinu, Mutendu, Nzonza.' , kikongo:'Boko, Kazu, Tatu, Lutelu.'},
  
    {name:'Gripe', value:'Mbambi, Kixinda.' , kikongo:'Févele, Iela, Mpaxi.'},
  
    {name:'Grilo', value:'Nzenze,Kimzeze.' , kikongo:'Ezenze, Luxololo.'},
  
    {name:'Grupo', value:'Mundu ua îma, Dianda, Kipupa.' , kikongo:'Ndonga, Ekutu, Ebundu, Buka.'},
  
    {name:'Guarda', value:'Baka, Langa, Lundila, Lunda.' , kikongo:'Langidila, Kubika, Vanga.'},
  
    {name:'Guardanapo', value:'Mukombi.' , kikongo:'Nlele uakungununa ónua.'},
  
    {name:'Guia', value:'Kituamenu, Kituamenenu.' , kikongo:'Tuamina, e njila.'},
  
    {name:'Guiador', value:'Muendexi, Kapita.' , kikongo:'Nkuendesi, Mbindikilu.'},
  
    {name:'Guerreiro', value:'Múkua-ita, Múkua-kúlua.' , kikongo:'Mbalakami, Kingumba.'},
  
    {name:'Guloso', value:'Múkua-luimbi mu kúdia, Múkua-jihanji.' , kikongo:'Ambiki, Okavila, Nsuangadi, Untafuni.'},
  
    {name:'Guita', value:'Ngoji, Soma, Kamukolo.' , kikongo:'Ngonji, Ximba, Nxinga.'},
  
    {name:'Guitarra', value:'Mbanza, Kambanza.' , kikongo:'Luvuitu, Kitanda, Ngoma ia xikila ie nlembu.'},
  
    {name:'Guiar', value:'Kuendesa, Bita.' , kikongo:'Xindika, Diatisa.'},
  
    {name:'Habilitar', value:'Ta iambu, Kalanga, Longa.' , kikongo:'Zaísa, Longesa.'},
  
    {name:'Habilitação', value:'Ndunge, Uhete.' , kikongo:'Ngangu, Lufuanu.'},
  
    {name:'Habitação', value:'Inzu, Dibata, Kitungu.' , kikongo:'Nzo, Evata, Kala.'},
  
    {name:'Habitante', value:'Múkua-ixi, Mukuanzo.' , kikongo:'Nkuanzo, Unkadi.'},
  
    {name:'Habitar', value:'Kala, Nanga, Zelela.' , kikongo:'Kala ie Nzo.'},
  
    {name:'Hábito', value:'Kifa, Kifana.' , kikongo:'Nvuatu, Kizuatu.'},
  
    {name:'Habituado', value:'Uejidila.' , kikongo:'Nkutukidi.'},
  
    {name:'Harmonizar', value:'Fama, Jiulula.' , kikongo:'Vuvisa, Lembuluísa.'},
  
    {name:'Harpa', value:'Álapa, Mbanza.' , kikongo:'Kokolo.'},
  
    {name:'Hasta', value:'Dionga, Musongo.' , kikongo:'Mbanvilu, Nteka a kinzáu.'},
  
    {name:'Haste', value:'Ngunhu, Mbinga, Tangu.' , kikongo:'Unxi ua vundula, Lumbindikilu.'},
  
    {name:'Haver', value:'Sai, Kala, Mona.' , kikongo:'Tala, Kaxidi, Auana.'},
  
    {name:'Heim?', value:'Kuambe?, Kuxi?.' , kikongo:'Uaué!, Unki?.'},
  
    {name:'Hemisférico', value:'Dibumbu dia kaxaxi, Mbandu.' , kikongo:'A nza, Ndambu a nzi.'},
  
    {name:'Hemorragia', value:'Ditundilu dia manhinga.' , kikongo:'Lukatuka lua menga.'},
  
    {name:'Herança', value:'Undundu, Kandámbia.' , kikongo:'Ima ia vumbi, Éfua.'},
  
    {name:'Herbívoro', value:'Údia iangu mba inima.' , kikongo:'Bulukidiango xixi ie bundu, vuka kidianga e xi.'},
  
    {name:'Hérnia', value:'Kimbuila.' , kikongo:'Únkua-nlola.'},
  
    {name:'Herói', value:'Ngunza.' , kikongo:'Nkabi, Ekesa, Kimbangala.'},
  
    {name:'Herdeiro', value:'Mulundudi, Ndundu, Hunde.' , kikongo:'Unvinganu, Mumpingila éfua iovo ima ia vumbi. Unsadilu.'},
  
    {name:'Herdar', value:'Lundúla, Bingana.' , kikongo:'Lumbula, Vuila, Vingila'},
  
    {name:'Higiene', value:'Umbote, Kuzela, Kikalakalu, Kiauaba pala kukala ni muenhu uambote.' , kikongo:'Mambu ma vimpi luvelelesu, nvelela, lusemu.'},
  
    {name:'Hilariante', value:'Kituala kisangalasa, Kiavuvika, Kiavuvika.' , kikongo:'Kiese, Iangala, Luiangalalu, Lusevelu.'},
  
    {name:'Himen', value:'Kabasu, Kiba kiofele kijika kivaji kia muhatu, Tendu.' , kikongo:'Ubaku, Lûtukila, Lupapilu, Lusompunu.'},
  
    {name:'Hino', value:'Muimbu, Mukumbi, Kisungu.' , kikongo:'Nkunga, Tola, Lutolu.'},
  
    {name:'Hipócrita', value:'MÚkua-kária, Kingandu, Uala ni Kádia o mangonha.' , kikongo:'Nkâ-kuvunina, Umpuki.'},
  
    {name:'Hiena', value:'Kimalanga, Limbungu, Kimbúngua.' , kikongo:'Kimpalangu, Kinguanji.'},
  
    {name:'Hipopótamo', value:'Dikebe.' , kikongo:'Lubutamu, Kiabutama.'},
  
    {name:'História', value:'Malunga, Musoso.' , kikongo:'Lusansu, Obukiditu, Moko ia nkulu kintindi.'},
  
    {name:'Historiador', value:'Uta misoso, Musaoneki.' , kikongo:'Unsoneki a mambu ma nza, Untangi a mambu mabela.'},
  
    {name:'Hoje', value:'Lelu, Mu kizúa kia lelu, Mu kizúa ino, Lumbu kaki.' , kikongo:'Ouáu, O unu, Diedimu, Unu diadi, Lumbu, Kaki, Kialumbu, Ekiaki, Mu Ntangua eái.'},
    
    {name:'Homem', value:'Diala, Mutata, Mutu.' , kikongo:'Eiakala, Ebalu, Nkuluntu.'},
  
    {name:'Homenagem', value:'Kiximanu, Kifumanu, Kisakidilu.' , kikongo:'Nkembu, Kunda, Tutondelu.'},
  
    {name:'Pessoas', value:'Atu, Mundu ua atu, Mala, Afi.' , kikongo:'Antu, Bantu, Ndonga ia antu, Iakala.'},
  
    {name:'Homicida', value:'Kijiba, Mujibe a akuetu.' , kikongo:'Kivonda o muntu, Kimpumbulu.'},
  
    {name:'Homicídio', value:'Kujiba, Kijiba, Ujibanganga.' , kikongo:'Vonda o muntu, Luvondo lua muntu.'},
  
    {name:'Honestidade', value:'Kizelu, Uzedi, Nganda.' , kikongo:'Zitu, Lujitisu, Kangalo ambote, Ludi, Kieleka.'},
  
    {name:'Honesto', value:'Mujitu, Mumbundu, Uakidim Uatetuluka.' , kikongo:'Unvumini, Kiavunina, Kialombélua.'},
  
    {name:'Imaginação', value:'Kubanza, Kixinganeku, Ditala.' , kikongo:'Banzu-banzu, Mbadika, Luvunxilu.'},
  
    {name:'Imaginar', value:'Ila, Banza, Fika, Kalikulala.' , kikongo:'Kevesa, Levesa, Badika, Iindula.'},
  
    {name:'Imaginável', value:'Kixingeneku, Kubanza.' , kikongo:'Kiambisu, Ke kia luaka mu ntángua iávia-ko.'},
  
    {name:'Imbecil', value:'Kiximba, Kituji, Mbulutu.' , kikongo:'Molo, Kióua, Matutu, Kimbumbulukutu.'},
  
    {name:'Imaturo', value:'Kiauisu, Kaxibile.' , kikongo:'Kiambisu, Alembi kola iovo buaka.'},
  
    {name:'Imediatamente', value:'Kitangana kienieki.' , kikongo:'Vana, Zaki.'},
  
    {name:'Imediato', value:'Kabanda, Mutumini.' , kikongo:'Kiafilama.'},

    
    {name:'Amor', value:'kizola, Henda, Kinhami, Ukamba, Kiari.' , kikongo:'Nkenda, Nzola, Luzolu, Lutondu, Lutondelu, E kanga.'},

    {name:'Amor ao próximo', value:'Upange, Henda ia mukenu.' , kikongo:'Kiese kua nnkundi, Luzolu lua nkuetu.'},
  
    {name:'Amor Fraterno', value:'Kudizola ni akuentu, Kudituma ni jipange, Kunhupuka.' , kikongo:'Kudizola kiambote, Kudituma kiampuena, Luzolu lua mbunji.'},
  
    {name:'Coração', value:'Muxima, Muenhu, Pupa.' , kikongo:'Ntima, Nxima, Kimuanda, Móio, Monho, Mbundu.'},
  
    {name:'Bom-dia', value:'Uazeká, uazekele kié, Sá ngana, kimeniókio ngana.' , kikongo:'Lele, Oxikamene?, Okolele?, Una kiamboté.'},
  
    {name:'Boa-noite', value:'Usuk ó, Usuku uambote, Kusanguluka.' , kikongo:'Fuku umbote, Nuna kiamboté, Kembaji.'},
  
    {name:'Boa-tarde', value:'Uanange kiebi.' , kikongo:'Onángini, Ototele.'},
    
    {name:'Boas-festas', value:'Jifesta jiambote.' , kikongo:'Bofika, Lukaílu lua nvu ampa.'},
  
    {name:'Boa-viagem', value:'Bixila,Ndaiê!.' , kikongo:'Uenda Kiambote, Uenda Kiabiza.'},
  
    {name:'Boa', value:'Uaujitsu' , kikongo:'Kiambote, Kiatoma, Kiaxingama.'},
  
    {name:'Sangue', value:'Mahinga, Kinhinga.' , kikongo:'Menga, Vendu.'},

    { name: 'Tutula', value: 'Abaixar ',kikongo:' Kulula, Vetama, Betuka, Zembeka ' },
    { name: 'Betama', value: 'Abaixar ',kikongo:' Kulula, Vetama, Betuka, Zembeka ' },
    { name: 'Butala', value: 'Abaixar ',kikongo:' Kulula, Vetama, Betuka, Zembeka ' },

    {name:'Mbandu', value:'Banco' , kikongo:'E simu, Ndambu, Luxombolo, Nkoko, Mpeta.'},
    {name:'Ngonge', value:'Banco' , kikongo:'E simu, Ndambu, Luxombolo, Nkoko, Mpeta.'},
    {name:'Kitomba', value:'Banco' , kikongo:'E simu, Ndambu, Luxombolo, Nkoko, Mpeta.'},
    {name:'Nzemb a', value:'Banco' , kikongo:'E simu, Ndambu, Luxombolo, Nkoko, Mpeta.'},
    {name:'Dikonde', value:'Banana' , kikongo:'Tiba, Dikonde, Xiba, Lende.'},
    {name:'Kasoko', value:'Banana' , kikongo:'Tiba, Dikonde, Xiba, Lende.'},
    {name:'Dibalata', value:'Barata' , kikongo:'Mpese, Luienu, Lututu.'},
    {name:'Lupeka', value:'Barata' , kikongo:'Mpese, Luienu, Lututu.'},
    {name:'Lupenhe', value:'Barata' , kikongo:'Mpese, Luienu, Lututu.'},
    {name:'Penha', value:'Barata' , kikongo:'Mpese, Luienu, Lututu.'},
    {name:'Pese', value:'Barata' , kikongo:'Mpese, Luienu, Lututu.'},
    {name:'Pelekes', value:'Barata' , kikongo:'Mpese, Luienu, Lututu.'},
    {name:'Muezu', value:'Barba' , kikongo:'Bobo, Nzevu, Kisafa, Kienge.'},
    {name:'Kikamba', value:'Barba' , kikongo:'Bobo, Nzevu, Kisafa, Kienge.'},
    {name:'Kiafika', value:'Barato' , kikongo:'Kiakeva, Anfiku, Nsendu, Ntalu ia kete, Kiantalu ia kukuka.'},
    {name:'Kialeluka', value:'Barato' , kikongo:'Kiakeva, Anfiku, Nsendu, Ntalu ia kete, Kiantalu ia kukuka.'},
    {name:'Utinga', value:'Barato' , kikongo:'Kiakeva, Anfiku, Nsendu, Ntalu ia kete, Kiantalu ia kukuka.'},
    {name:'Nzebu', value:'Baba' , kikongo:'Mete, Meta, Njembe, Luzembe, Nzembu, Fulu-fulu.'},
    {name:'Ifulu', value:'Baba' , kikongo:'Mete, Meta, Njembe, Luzembe, Nzembu, Fulu-fulu.'},
    {name:'Mate', value:'Baba' , kikongo:'Mete, Meta, Njembe, Luzembe, Nzembu, Fulu-fulu.'},
     {name:'Dilongo', value:'Bacia' , kikongo:'Bola, Nsunga, E longa.'},
    {name:'Mbaxinha', value:'Bacia' , kikongo:'Bola, Nsunga, E longa.'},




    {name:'Honga', value:'Baixa' , kikongo:'Lukululuku, Nkoko, Lukevesu, Fulu kia kuluka.'},
  {name:'Mbuelu', value:'Baixa' , kikongo:'Lukululuku, Nkoko, Lukevesu, Fulu kia kuluka.'},
  {name:'Ndamba', value:'Baixa' , kikongo:'Lukululuku, Nkoko, Lukevesu, Fulu kia kuluka.'},
  {name:'Kisasamba', value:'Barra' , kikongo:'Mbindi, Lukumbu, Nsuku, E senselu.'},
  {name:'Muxinda', value:'Barra' , kikongo:'Mbindi, Lukumbu, Nsuku, E senselu.'},
  {name:'Ditakunenu', value:'Barra' , kikongo:'Mbindi, Lukumbu, Nsuku, E senselu.'},
  {name:'Tundu', value:'Barraca' , kikongo:'Balaka, Nzo a Nlele, E tamba, Saba, Lubolo,Kanzo ka vuvama.'},
  {name:'Dikumbi', value:'Barraca' , kikongo:'Balaka, Nzo a Nlele, E tamba, Saba, Lubolo,Kanzo ka vuvama.'},
  {name:'E vundilu', value:'Barraca' , kikongo:'Balaka, Nzo a Nlele, E tamba, Saba, Lubolo,Kanzo ka vuvama.'},
  {name:'Kisasamba', value:'Barraca' , kikongo:'Balaka, Nzo a Nlele, E tamba, Saba, Lubolo,Kanzo ka vuvama.'},
  {name:'Tutulu', value:'Barraca' , kikongo:'Balaka, Nzo a Nlele, E tamba, Saba, Lubolo,Kanzo ka vuvama.'},
  {name:'Barrar', value:'B eba, Bebeka.' , kikongo:'Beteka,  Tapika, Lukakilu.'},
  {name:'Beba', value:'Barrar' , kikongo:'Beteka,  Tapika, Lukakilu.'},
  {name:'Bebeka', value:'Barrar' , kikongo:'Beteka,  Tapika, Lukakilu.'},
  {name:'Kipaka', value:'Barreira' , kikongo:' Dungungu, E bongelu dia nteke.'},
  {name:'Kibanga', value:'Barreira' , kikongo:' Dungungu, E bongelu dia nteke.'},
  {name:'Kibatu', value:'Barreira' , kikongo:' Dungungu, E bongelu dia nteke.'},
  {name:'Divumu', value:'Barriga' , kikongo:'Vumu, LubuMbamu, Kebe, Luimitu.'},
  {name:'Dimala', value:'Barriga' , kikongo:'Vumu, LubuMbamu, Kebe, Luimitu.'},
  {name:'Rikebe', value:'Barriga' , kikongo:'Vumu, LubuMbamu, Kebe, Luimitu.'}, 
  {name:'Kirivumu', value:'Barriguda' , kikongo:'Kavumu, Vumu ia mpeuena, Uukuta, Luimitu.'},
  {name:'Divumu diedi ngaba-ngaba ni ', value:'Barriguda' , kikongo:'Kavumu, Vumu ia mpeuena, Uukuta, Luimitu.'},
  {name:'mala adikota', value:'Barriguda' , kikongo:'Kavumu, Vumu ia mpeuena, Uukuta, Luimitu.'},
  {name:'Mutu ni kidivumu', value:'Barrigudo' , kikongo:'Una ei vumu kia vimba, Uakankuka e vumu.'},
  {name:'Mukua-dila dionene', value:'Barrigudo' , kikongo:'Una ei vumu kia vimba, Uakankuka e vumu.'},
  {name:'Nzanga', value:'Barulho' , kikongo:'Mazu, Ungolo, Ntantani, Luboko, Miangu, Nvita, Luvovo, Lusoselu.'},
  {name:'Ngololo', value:'Barulho' , kikongo:'Mazu, Ungolo, Ntantani, Luboko, Miangu, Nvita, Luvovo, Lusoselu.'},
  {name:'Nvunda', value:'Barulho' , kikongo:'Mazu, Ungolo, Ntantani, Luboko, Miangu, Nvita, Luvovo, Lusoselu.'},
  {name:'Nzangu', value:'Barulho' , kikongo:'Mazu, Ungolo, Ntantani, Luboko, Miangu, Nvita, Luvovo, Lusoselu.'},
  {name:'Muanji', value:'Barulho' , kikongo:'Mazu, Ungolo, Ntantani, Luboko, Miangu, Nvita, Luvovo, Lusoselu.'},
  {name:'Mbetekete', value:'Base' , kikongo:'E sina, Luiekelu, Lubuminu, Kiandekele.'},
  {name:'Kikota', value:'Base' , kikongo:'E sina, Luiekelu, Lubuminu, Kiandekele.'},
  {name:'Kikotongo', value:'Base' , kikongo:'E sina, Luiekelu, Lubuminu, Kiandekele.'},
  {name:'Nkulu', value:'Base' , kikongo:'E sina, Luiekelu, Lubuminu, Kiandekele.'},
  {name:'E bulu', value:'Base' , kikongo:'E sina, Luiekelu, Lubuminu, Kiandekele.'},
  {name:'Mbanjidilu', value:'Base' , kikongo:'E sina, Luiekelu, Lubuminu, Kiandekele.'},
  {name:'Ndanji', value:'Base' , kikongo:'E sina, Luiekelu, Lubuminu, Kiandekele.'},
  {name:'Kiavulu', value:'Bastante' , kikongo:'Afuana, Kiauokela, Fuanu, Kiampuena, Kiabeta, Kialuta.'},
  {name:'Kinene', value:'Bastante' , kikongo:'Afuana, Kiauokela, Fuanu, Kiampuena, Kiabeta, Kialuta.'},
  {name:'Kisakidilu', value:'Bata' , kikongo:'Lenga, Nvuatu, Nvuatu ua kula, Iunga, Kinkutu kiakula.'},
  {name:'Gela', value:'Batalha' , kikongo:'Nvita, Nzingu, Lunuana,Luiembu.'},
  {name:'Ita', value:'Batalha' , kikongo:'Nvita, Nzingu, Lunuana,Luiembu.'},
  {name:'Kulaka', value:'Batalha' , kikongo:'Nvita, Nzingu, Lunuana,Luiembu.'},
  {name:'Lunda', value:'Batalha' , kikongo:'Nvita, Nzingu, Lunuana,Luiembu.'},
  {name:'Kubentana', value:'Batalha' , kikongo:'Nvita, Nzingu, Lunuana,Luiembu.'},
  {name:'Kikaxi', value:'Batalha' , kikongo:'Nvita, Nzingu, Lunuana,Luiembu.'},
  {name:'Betana', value:'Batalhar' , kikongo:'Nuana, Uandana, Nungajana e Nkomi.'},
  {name:'Bangagela', value:'Batalhar' , kikongo:'Nuana, Uandana, Nungajana e Nkomi.'},
  {name:'Batata', value:'M batata, Mbonzo, Karingu.' , kikongo:'Mbala, Lenge-lenge.'},
  {name:'Mbatata', value:'Batata' , kikongo:'Mbala, Lenge-lenge.'},
  {name:'Mbonzo', value:'Batata' , kikongo:'Mbala, Lenge-lenge.'},
  {name:'Karingu', value:'Batata' , kikongo:'Mbala, Lenge-lenge.'},
  {name:'Popa', value:'Bater' , kikongo:'Uanda, Koma, Ueta, Teva.'},
  {name:'Pupa', value:'Bater' , kikongo:'Uanda, Koma, Ueta, Teva.'},
  {name:'Beta', value:'Bater' , kikongo:'Uanda, Koma, Ueta, Teva.'},
  {name:'Sula', value:'Bater' , kikongo:'Uanda, Koma, Ueta, Teva.'},
  {name:'Xina', value:'Bater' , kikongo:'Uanda, Koma, Ueta, Teva.'},
  {name:'Panza', value:'Batota' , kikongo:'Luta lua Vonza.'},
  {name:'Mbonzo', value:'Batota' , kikongo:'Luta lua Vonza.'},
  {name:'Uadi', value:'Batota' , kikongo:'Luta lua Vonza.'},
  {name:'Batotar', value:'T a Panza, Ta uadi.' , kikongo:'Ta e divuninu.'},
  {name:'Ta Panza', value:'Batotar' , kikongo:'Ta e divuninu.'},
  {name:'Ta uadi', value:'Batotar' , kikongo:'Ta e divuninu.'},
  {name:'Ngoma', value:'Batuque' , kikongo:'makinu, ludeku.'},
  {name:'Kindungu', value:'Batuque' , kikongo:'makinu, ludeku.'},
  {name:'Kukina', value:'Batuque' , kikongo:'makinu, ludeku.'},
  {name:'Lukinu', value:'Batuque' , kikongo:'makinu, ludeku.'},
  {name:'Kipuita', value:'Batuque' , kikongo:'makinu, ludeku.'},
  {name:'Longa', value:'Ensinar' , kikongo:'Sansa, Temunuisa, Jukula e lunji, Vangamesa.'},
  {name:'sasa', value:'Ensinar' , kikongo:'Sansa, Temunuisa, Jukula e lunji, Vangamesa.'},
  {name:'Ndogixi', value:'Ensinar' , kikongo:'Sansa, Temunuisa, Jukula e lunji, Vangamesa.'},
  {name:'Dimina', value:'Ensinar' , kikongo:'Sansa, Temunuisa, Jukula e lunji, Vangamesa.'},
  {name:'Dilonga', value:'Ensaiar' , kikongo:'Teza, Tezena, Vovolola, Longesa.'},
  {name:'Vovolola', value:'Ensaiar' , kikongo:'Teza, Tezena, Vovolola, Longesa.'},
  {name:'Longesa', value:'Ensaiar' , kikongo:'Teza, Tezena, Vovolola, Longesa.'},
  {name:'Kufikisa', value:'Ensaio' , kikongo:'Kufikisa, Ebalukisa, Mpovolola.'},
  {name:'Kuenga', value:'Ensaio' , kikongo:'Kufikisa, Ebalukisa, Mpovolola.'},
  {name:'Ndongixi', value:'Ensinador' , kikongo:'Nlongi, Nsanxi.'},
  {name:'Ubana Kuijia', value:'Ensinador' , kikongo:'Nlongi, Nsanxi.'},
  {name:'Kulonga', value:'Ensino' , kikongo:'Lilongesu, Lucaisu.'},
  {name:'Ulongelu', value:'Ensino' , kikongo:'Lilongesu, Lucaisu.'},

  {name:'Kulonga', value:'Ensinamento' , kikongo:'Lilongesu, Lucaisu, Fu kia Longela.'},
  {name:'Ulongelu', value:'Ensinamento' , kikongo:'Lilongesu, Lucaisu, Fu kia Longela.'},
  {name:'Dilongelu', value:'Ensinamento' , kikongo:'Lilongesu, Lucaisu, Fu kia Longela.'},
  {name:'Mulongi', value:'Ensinamento' , kikongo:'Lilongesu, Lucaisu, Fu kia Longela.'},
  {name:'Kikombo', value:'Ensinamento' , kikongo:'Lilongesu, Lucaisu, Fu kia Longela.'},
  {name:'Vinda', value:'Enrolar' , kikongo:'Fitijoka, Losela, Bangumuna, Vindumuna.'},
  {name:'Vindumuna', value:'Enrolar' , kikongo:'Fitijoka, Losela, Bangumuna, Vindumuna.'},
  {name:'Buririka', value:'Enrolar' , kikongo:'Fitijoka, Losela, Bangumuna, Vindumuna.'},
  {name:'Nhinga', value:'Enrolar' , kikongo:'Fitijoka, Losela, Bangumuna, Vindumuna.'},
  {name:'Nhingika', value:'Enrolar' , kikongo:'Fitijoka, Losela, Bangumuna, Vindumuna.'},
  {name:'Funda', value:'Enterrar' , kikongo:'Jika, Zika, Lakila mu mavu, Vumba munxi a mavu.'},
  {name:'Fundila', value:'Enterrar' , kikongo:'Jika, Zika, Lakila mu mavu, Vumba munxi a mavu.'},
  {name:'Vumbika', value:'Enterrar' , kikongo:'Jika, Zika, Lakila mu mavu, Vumba munxi a mavu.'},
  {name:'Lamba', value:'Enterrar' , kikongo:'Jika, Zika, Lakila mu mavu, Vumba munxi a mavu.'},
  {name:'Hinda', value:'Enterrar' , kikongo:'Jika, Zika, Lakila mu mavu, Vumba munxi a mavu.'},
  {name:'Kifundu', value:'Enterro' , kikongo:'Luziku, LuvuMbiku, Ntambi.'},
  {name:'Tambi', value:'Enterro' , kikongo:'Luziku, LuvuMbiku, Ntambi.'},
  {name:'Kufa', value:'Enterro' , kikongo:'Luziku, LuvuMbiku, Ntambi.'},
  {name:'Kihindu', value:'Enterro' , kikongo:'Luziku, LuvuMbiku, Ntambi.'},
  {name:'Kubaka', value:'Enterro' , kikongo:'Luziku, LuvuMbiku, Ntambi.'},
  {name:'Bokola', value:'Entrar' , kikongo:'Kota, Kotela, Dimina.'},
  {name:'Bokona', value:'Entrar' , kikongo:'Kota, Kotela, Dimina.'},
  {name:'Bokueza', value:'Entrar' , kikongo:'Kota, Kotela, Dimina.'},
  {name:'Bita', value:'Entrar' , kikongo:'Kota, Kotela, Dimina.'},
]
//Algortimo de ordenação do dicionario 
  const [dicionario, setDicionario] = useState(dados)
  dados.sort(function (a, b) {
    return (a.name).localeCompare(b.name);
  });

//Função de pesquisa 
  function search(value = "") {

    let data = [...dados], result = []

    for (let i = 0; i < data.length; i++) {
      if (data[i].name.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
        console.log(data[i].name)
        result.push(data[i])
      }
    }
    setDicionario(result);
  }

  return (

    <View style={{ backgroundColor:'#fff',height:'100%' }}>
      <View style={{backgroundColor:'#da2',padding:2, borderTopColor:'#da2'}}>

      <Text style={{fontWeight:'bold',fontSize:20,textAlign:'center',fontSize:17, marginTop:'7%',marginBottom:'4%',width:'100%'}}>Palavras</Text>
      
      <TextInput style={css.input} autoFocus={true} placeholder='Pesquisar' onChangeText={(e) => search(e)} />
      
      </View>
      <View >
        {/* Meu txt pesquisar */}
        {dicionario.length === 0 ?
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center",backgroundColor:'#fff',height:'100%' }}>
            <Text style={{ fontSize: 20 ,top:50}}>Palavra Não Encontrada.</Text>
          </View>:

         
          <FlatList style={css.container}
            data={dicionario} i
            
            keyExtractor={(item, index )=> index.toString()}
            renderItem={({ item,index}) => <Text style={css.palavras} onPress={() => props.navigation.navigate('Traducao', { key: item.name, trad: item.value.toString(),kiko:item.kikongo.toString() })} >{item.name}</Text>}
            
          />
        }
      </View>
    </View>

  );
}