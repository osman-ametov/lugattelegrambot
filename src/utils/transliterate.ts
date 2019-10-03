const cyr2lat = ([
    [ /«/g, "\"" ],
    [ /»/g, "\"" ],
    // 0. словарик
    // алейкум
    [ /алейкум/g, "aleyküm" ],
    [ /Алейкум/g, "Aleyküm" ],
    [ /АЛЕЙКУМ/g, "ALEYKÜM" ],
    // бейуде
    [ /бейуде/g, "Beyüde" ],
    [ /Бейуде/g, "Beyüde" ],
    [ /БЕЙУДЕ/g, "BEYÜDE" ],
    // большевик
    [ /большевик/g, "bolşevik" ],
    [ /Большевик/g, "Bolşevik" ],
    [ /БОЛЬШЕВИК/g, "BOLŞEVİK" ],
    // борнен
    [ /борнен/g, "bornen" ],
    [ /Борнен/g, "Bornen" ],
    [ /БОРНЕН/g, "BORNEN" ],
    // бугунь
    [ /([\s"'\(\)\-.,:;!?>\]])бугун/g, "$1bugün" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Бугун/g, "$1Bugün" ],
    [ /([\s"'\(\)\-.,:;!?>\]])БУГУН/g, "$1BUGÜN" ],
    // бузкесен
    [ /бузкесен/g, "buzkesen" ],
    [ /Бузкесен/g, "Buzkesen" ],
    [ /БУЗКЕСЕН/g, "BUZKESEN" ],
    // буксир
    [ /буксир/g, "buksir" ],
    [ /Буксир/g, "Buksir" ],
    [ /БУКСИР/g, "BUKSİR" ],
    // бульбуль
    [ /бульбуль/g, "bülbül" ],
    [ /Бульбуль/g, "Bülbül" ],
    [ /БУЛЬБУЛЬ/g, "BÜLBÜL" ],
    // бульвар
    [ /бульвар/g, "bulvar" ],
    [ /Бульвар/g, "Bulvar" ],
    [ /БУЛЬВАР/g, "BULVAR" ],
    // бульдозер
    [ /бульдозер/g, "buldozer" ],
    [ /Бульдозер/g, "Buldozer" ],
    [ /БУЛЬДОЗЕР/g, "BULDOZER" ],
    // бульон
    [ /бульон/g, "bulyon" ],
    [ /Бульон/g, "Bulyon" ],
    [ /БУЛЬОН/g, "BULYON" ],
    // бунен
    [ /бунен/g, "bunen" ],
    [ /буннен/g, "bunnen" ],
    [ /Бунен/g, "Bunen" ],
    [ /Буннен/g, "Bunnen" ],
    [ /БУНЕН/g, "BUNEN" ],
    [ /БУННЕН/g, "BUNNEN" ],
    // бус-бутюн
    [ /бус-бутюн/g, "büs-bütün" ],
    [ /Бус-бутюн/g, "Büs-bütün" ],
    [ /БУС-БУТЮН/g, "BÜS-BÜTÜN" ],
    // бутерброд
    [ /бутерброд/g, "buterbrod" ],
    [ /Бутерброд/g, "Buterbrod" ],
    [ /БУТЕРБРОД/g, "BUTERBROD" ],
    // буфер и буфет
    [ /буфе([рт])/g, "bufe$1" ],
    [ /Буфе([рт])/g, "Bufe$1" ],
    [ /БУФЕ([РТ])/g, "BUFE$1" ],
    // буюк
    [ /буюк([^ъ])/g, "büyük$1" ],
    [ /Буюк([^ъ])/g, "Büyük$1" ],
    [ /БУЮК([^Ъ])/g, "BÜYÜK$1" ],
    // формы глагола буюмек
    [ /бую([гдйлмнпрстчшc])(и)/g, "büyü$1$2" ],
    [ /Бую([гдйлмнпрстчшc])(и)/g, "Büyü$1$2" ],
    [ /БУЮ([ГДЙЛМНПРСТЧШС])(И)/g, "BÜYÜ$1$2" ],
    // буюп
    [ /([\s"'\(\)\-.,:;!?>\]])буюп([\s"'.,:;!?\)\-\[<])/g, "$1büyüp$2" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Буюп([\s"'.,:;!?\)\-\[<])/g, "$1Büyüp$2" ],
    [ /([\s"'\(\)\-.,:;!?>\]])БУЮП([\s"'.,:;!?\)\-\[<])/g, "$1BÜYÜP$2" ],
    // буют
    [ /буют([^ыа])/g, "büyüt$1" ],
    [ /Буют([^ыа])/g, "Büyüt$1" ],
    [ /БУЮТ([^ЫА])/g, "BÜYÜT$1" ],
    // гонъюль
    [ /гонъюл/g, "göñül" ],
    [ /ГОНЪЮЛ/g, "GÖÑÜL" ],
    // горизонт
    [ /горизонт/g, "gorizont" ],
    [ /Горизонт/g, "Gorizont" ],
    [ /ГОРИЗОНТ/g, "GORİZONT" ],
    // госпиталь
    [ /госпиталь/g, "gospital" ],
    [ /Госпиталь/g, "Gospital" ],
    [ /ГОСПИТАЛЬ/g, "GOSPİTAL" ],
    // гунях
    [ /гунях/g, "günâh" ],
    [ /Гунях/g, "Günâh" ],
    [ /ГУНЯХ/g, "GÜNÂH" ],
    // гуна
    [ /гуна/g, "güna" ],
    [ /Гуна/g, "Güna" ],
    [ /ГУНА/g, "GÜNA" ],
    // гургуль
    [ /гургуль/g, "gürgül" ],
    [ /Гургуль/g, "Gürgül" ],
    [ /ГУРГУЛЬ/g, "GÜRGÜL" ],
    // гуя
    [ /гуя/g, "güya" ],
    [ /Гуя/g, "Güya" ],
    [ /ГУЯ/g, "GÜYA" ],
    // ёлнен
    [ /ёлнен/g, "yolnen" ],
    [ /Ёлнен/g, "Yolnen" ],
    [ /ЁЛНЕН/g, "YOLNEN" ],
    // зумбуль
    [ /зумбуль/g, "zümbül" ],
    [ /Зумбуль/g, "Zümbül" ],
    [ /ЗУМБУЛЬ/g, "ZÜMBÜL" ],
    // кодекс
    [ /кодекс/g, "kodeks" ],
    [ /Кодекс/g, "Kodeks" ],
    [ /КОДЕКС/g, "KODEKS" ],
    // кодификация и однокоренные
    [ /кодифик/g, "kodifik" ],
    [ /Кодифик/g, "Kodifik" ],
    [ /КОДИФИК/g, "KODİFİK" ],
    // козь
    [ /козь([^я])/g, "köz$1" ],
    [ /Козь([^я])/g, "Köz$1" ],
    [ /КОЗЬ([^Я])/g, "KÖZ$1" ],
    // кой
    [ /кой([\s"'.,:;!?\)\-\[<])/g, "köy$1" ],
    [ /Кой([\s"'.,:;!?\)\-\[<])/g, "Köy$1" ],
    [ /КОЙ([\s"'.,:;!?\)\-\[<])/g, "KÖY$1" ],
    [ /койнинъ([\s"'.,:;!?\)\-\[<])/g, "köyniñ$1" ],
    [ /Койнинъ([\s"'.,:;!?\)\-\[<])/g, "Köyniñ$1" ],
    [ /КОЙНИНЪ([\s"'.,:;!?\)\-\[<])/g, "KÖYNİÑ$1" ],
    [ /койни([\s"'.,:;!?\)\-\[<])/g, "köyni$1" ],
    [ /Койни([\s"'.,:;!?\)\-\[<])/g, "Köyni$1" ],
    [ /КОЙНИ([\s"'.,:;!?\)\-\[<])/g, "KÖYNİ$1" ],
    [ /койге([\s"'.,:;!?\)\-\[<])/g, "köyge$1" ],
    [ /Койге([\s"'.,:;!?\)\-\[<])/g, "Köyge$1" ],
    [ /КОЙГЕ([\s"'.,:;!?\)\-\[<])/g, "KÖYGE$1" ],
    [ /койде([\s"'.,:;!?\)\-\[<])/g, "köyde$1" ],
    [ /Койде([\s"'.,:;!?\)\-\[<])/g, "Köyde$1" ],
    [ /КОЙДЕ([\s"'.,:;!?\)\-\[<])/g, "KÖYDE$1" ],
    [ /койдеки([\s"'.,:;!?\)\-\[<])/g, "köydeki$1" ],
    [ /Койдеки([\s"'.,:;!?\)\-\[<])/g, "Köydeki$1" ],
    [ /КОЙДЕКИ([\s"'.,:;!?\)\-\[<])/g, "KÖYDEKİ$1" ],
    [ /койден([\s"'.,:;!?\)\-\[<])/g, "köyden$1" ],
    [ /Койден([\s"'.,:;!?\)\-\[<])/g, "Köyden$1" ],
    [ /КОЙДЕН([\s"'.,:;!?\)\-\[<])/g, "KÖYDEN$1" ],
    [ /койлю/g, "köylü" ],
    [ /Койлю/g, "Köylü" ],
    [ /КОЙЛЮ/g, "KÖYLÜ" ],
    [ /([\s"'\(\)\-.,:;!?>\]])кою/g, "$1köyü" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Кою/g, "$1Köyü" ],
    [ /([\s"'\(\)\-.,:;!?>\]])КОЮ/g, "$1KÖYÜ" ],
    // ком-кок
    [ /([\s"'\(\)\-.,:;!?>\]])ком-кок/g, "$1köm-kök" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Ком-кок/g, "$1Köm-kök" ],
    [ /([\s"'\(\)\-.,:;!?>\]])КОМ-КОК/g, "$1KÖM-KÖK" ],
    // кок
    [ /([\s"'\(\)\-.,:;!?>\]])кок([^еёюяЕЁЮЯ])/g, "$1kök$2" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Кок([^еёюяЕЁЮЯ])/g, "$1Kök$2" ],
    [ /([\s"'\(\)\-.,:;!?>\]])КОК([^еёюяЕЁЮЯ])/g, "$1KÖK$2" ],
    // кокос
    [ /кокос/g, "kokos" ],
    [ /Кокос/g, "Kokos" ],
    [ /КОКОС/g, "KOKOS" ],
    // коллега и однокоренные
    [ /коллег/g, "kolleg" ],
    [ /Коллега/g, "Kollega" ],
    [ /КОЛЛЕГА/g, "KOLLEGA" ],
    // коллекция, коллектив и однокоренные
    [ /коллек([цт])/g, "kollek$1" ],
    [ /Коллек([цт])/g, "Kollek$1" ],
    [ /КОЛЛЕК([ЦТ])/g, "KOLLEK$1" ],
    // комбинат и однокоренные
    [ /комбин/g, "kombin" ],
    [ /Комбин/g, "Kombin" ],
    [ /КОМБИН/g, "KOMBİN" ],
    // комедия
    [ /комедия/g, "komediya" ],
    [ /Комедия/g, "Komediya" ],
    [ /КОМЕДИЯ/g, "KOMEDİYA" ],
    // комендант и однокоренные
    [ /коменда/g, "komenda" ],
    [ /Коменда/g, "Komendna" ],
    [ /КОМЕНДА/g, "KOMENDA" ],
    // комета
    [ /комета/g, "kometa" ],
    [ /Комета/g, "Kometa" ],
    [ /КОМЕТА/g, "KOMETA" ],
    // комиссия, комитет
    [ /коми([ст])/g, "komi$1" ],
    [ /Коми([ст])/g, "Komi$1" ],
    [ /КОМИ([СТ])/g, "KOMİ$1" ],
    // комментарий и однокоренные
    [ /коммент/g, "komment" ],
    [ /Коммент/g, "Komment" ],
    [ /КОММЕНТ/g, "KOMMENT" ],
    // коммерция и коммерсант
    [ /коммер([сц])/g, "kommer$1" ],
    [ /Комер([сц])/g, "Kommer$1" ],
    [ /КОММЕР([СЦ])/g, "KOMMER$1" ],
    // компенсация и однокоренные
    [ /компенс/g, "kompens" ],
    [ /Компенс/g, "Kompens" ],
    [ /КОМПЕНС/g, "KOMPENS" ],
    // компиляция и однокоренные
    [ /компил/g, "kompil" ],
    [ /Компил/g, "Kompil" ],
    [ /КОМПИЛ/g, "KOMPİL" ],
    // компьютер
    [ /компьютер/g, "kompyuter" ],
    [ /Компьютер/g, "Kompyuter" ],
    [ /КОМПЬЮТЕР/g, "KOMPYUTER" ],
    // конвейер
    [ /конвейер/g, "konveyer" ],
    [ /Конвейер/g, " Konveyer" ],
    [ /КОНВЕЙЕР/g, "KONVEYER" ],
    // конвенция и однокоренные
    [ /конвен/g, "konven" ],
    [ /Конвен/g, "Konven" ],
    [ /КОНВЕН/g, "KONVEN" ],
    // конверт
    [ /конверт/g, "konvert" ],
    [ /Конверт/g, "Konvert" ],
    [ /КОНВЕРТ/g, "KONVERT" ],
    // конденсатор и однокоренные
    [ /конденс/g, "kondens" ],
    [ /Конденс/g, "Kondens" ],
    [ /КОНДЕНС/g, "KONDENS" ],
    // кондитер
    [ /кондитер/g, "konditer" ],
    [ /Кондитер/g, "konditer" ],
    [ /КОНДИТЕР/g, "KONDİTER" ],
    // коник (конический)
    [ /коник/g, "konik" ],
    [ /Коник/g, "Konik" ],
    [ /КОНИК/g, "KONİK" ],
    // консер
    [ /консерв/g, "konserv" ],
    [ /Консерв/g, "Konserv" ],
    [ /КОНСЕРВ/g, "KONSERV" ],
    // контейнер
    [ /контейнер/g, "konteyner" ],
    [ /Контейнер/g, "Konteyner" ],
    [ /КОНТЕЙНЕР/g, "KONTEYNER" ],
    // континент
    [ /континент/g, "kontinent" ],
    [ /Континент/g, "Kontinent" ],
    [ /КОНТИНЕНТ/g, "KONTİNENT" ],
    // конференция, конфет
    [ /конфе/g, "konfe" ],
    [ /Конфе/g, "Konfe" ],
    [ /КОНФЕ/g, "KONFE" ],
    // конфискация и однокоренные
    [ /конфискац/g, "konfiskats" ],
    [ /Конфискац/g, "Konfiskats" ],
    [ /КОНФИСКАЦ/g, "KONFİSKATS" ],
    // концентрация и однокоренные
    [ /концен/g, "kontsen" ],
    [ /Концен/g, "Kontsen" ],
    [ /КОНЦЕН/g, "KONTSEN" ],
    // концерт
    [ /концерт/g, "kontsert" ],
    [ /Концерт/g, "Kontsert" ],
    [ /КОНЦЕРТ/g, "KONTSERT" ],
    // коньки
    [ /коньки/g, "konki" ],
    [ /Коньки/g, "Konki" ],
    [ /КОНЬКИ/g, "KONKİ" ],
    // коньки
    [ /коньяк/g, "konyak" ],
    [ /Коньяк/g, "Konyak" ],
    [ /КОНЬЯК/g, "KONYAK" ],
    // конъюктура
    [ /конъюктур/g, "konyuktur" ],
    [ /Конъюктур/g, "Konyuktur" ],
    [ /КОНЪЮКТУР/g, "KONYUKTUR" ],
    // копирлемек и однокоренные
    [ /копирле/g, "kopirle" ],
    [ /Копирле/g, "Kopirle" ],
    [ /КОПИРЛЕ/g, "KOPİRLE" ],
    // копия
    [ /копия/g, "kopiya" ],
    [ /Копия/g, "Kopiya" ],
    [ /КОПИЯ/g, "KOPİYA" ],
    // коп
    [ /([\s"'\(\)\-.,:;!?>\]])коп([^еёюяЕЁЮЯ])/g, "$1köp$2" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Коп([^еёюяЕЁЮЯ])/g, "$1Köp$2" ],
    [ /([\s"'\(\)\-.,:;!?>\]])КОП([^еёюяЕЁЮЯ])/g, "$1KÖP$2" ],
    // корея
    [ /корея/g, "koreya" ],
    [ /Корея/g, "Koreya" ],
    [ /КОРЕЯ/g, "KOREYA" ],
    // корректор, корреспондент
    [ /корре/g, "korre" ],
    [ /Корре/g, "Korre" ],
    [ /КОРРЕ/g, "KORRE" ],
    // коридор
    [ /коридор/g, "koridor" ],
    [ /Коридор/g, "Koridor" ],
    [ /КОРИДОР/g, "KORİDOR" ],
    // косметика
    [ /косме/g, "kosme" ],
    [ /Косме/g, "Korsme" ],
    [ /КОСМЕ/g, "KOSME" ],
    // костюм
    [ /костюм/g, "kostüm" ],
    [ /Костюм/g, "Kostüm" ],
    [ /КОСТЮМ/g, "KOSTÜM" ],
    // космик (космический)
    [ /космик/g, "kosmik" ],
    [ /Космик/g, "Kosmik" ],
    [ /КОСМИК/g, "KOSMİK" ],
    // котировка
    [ /котировка/g, "kotirovka" ],
    [ /Котировка/g, "Kotirovka" ],
    [ /КОТИРОВКА/g, "KOTİROVKA" ],
    // котлет
    [ /котлет/g, "kotlet" ],
    [ /Котлет/g, "Kotlet" ],
    [ /КОТЛЕТ/g, "KOTLET" ],
    // коше
    [ /коше/g, "köşe" ],
    [ /Коше/g, "Köşe" ],
    [ /КОШЕ/g, "KÖŞE" ],
    // куе
    [ /([\s"'\(\)\-.,:;!?>\]])куе/g, "$1küye" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Куе/g, "$1Küye" ],
    [ /([\s"'\(\)\-.,:;!?>\]])КУЕ/g, "$1KÜYE" ],
    // кулинар
    [ /кулинар/g, "kulinar" ],
    [ /Кулинар/g, "Kulinar" ],
    [ /КУЛИНАР/g, "KULİNAR" ],
    // кульминация
    [ /кульминац/g, "kulminats" ],
    [ /Кульминац/g, "Kulminats" ],
    [ /КУЛЬМИНАЦ/g, "KULMİNATS" ],
    // культивация
    [ /культив/g, "kultiv" ],
    [ /Культив/g, "Kultiv" ],
    [ /КУЛЬТИВ/g, "KULTİV" ],
    // культура
    [ /культура/g, "kultura" ],
    [ /Культура/g, "Kultura" ],
    [ /КУЛЬТУРА/g, "KULTURA" ],
    // курьк
    [ /([\s"'\(\)\-.,:;!?>\]])курк([\s"'.,:;!?\)\-\[<])/g, "$1kürk$2" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Курк([\s"'.,:;!?\)\-\[<])/g, "$1Kürk$2" ],
    [ /([\s"'\(\)\-.,:;!?>\]])КУРК([\s"'.,:;!?\)\-\[<])/g, "$1KÜRK$2" ],
    [ /([\s"'\(\)\-.,:;!?>\]])куркке/g, "$1kürkke" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Куркке/g, "$1Kürkke" ],
    [ /([\s"'\(\)\-.,:;!?>\]])КУРККЕ/g, "$1KÜRKKE" ],
    [ /([\s"'\(\)\-.,:;!?>\]])куркни/g, "$1kürkni" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Куркни/g, "$1Kürkni" ],
    [ /([\s"'\(\)\-.,:;!?>\]])КУРКНИ/g, "$1KÜRKNİ" ],
    [ /([\s"'\(\)\-.,:;!?>\]])куркте/g, "$1kürkte" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Куркте/g, "$1Kürkte" ],
    [ /([\s"'\(\)\-.,:;!?>\]])КУРКТЕ/g, "$1KÜRKTE" ],
    [ /([\s"'\(\)\-.,:;!?>\]])куркчи/g, "$1kürkçi" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Куркчи/g, "$1Kürkçi" ],
    [ /([\s"'\(\)\-.,:;!?>\]])КУРКЧИ/g, "$1KÜRKÇİ" ],
    [ /([\s"'\(\)\-.,:;!?>\]])куркчю/g, "$1kürkçü" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Куркчю/g, "$1Kürkçü" ],
    [ /([\s"'\(\)\-.,:;!?>\]])КУРКЧЮ/g, "$1KÜRKÇÜ" ],
    // курсив
    [ /курсив/g, "kursiv" ],
    [ /Курсив/g, "Kursiv" ],
    [ /КУРСИВ/g, "KURSİV" ],
    // кушкулемек и однокоренные
    [ /кушку/g, "küşkü" ],
    [ /Кушку/g, "Küşkü" ],
    [ /КУШКУ/g, "KÜŞKÜ" ],
    // куюк
    [ /куюк/g, "küyük" ],
    [ /Куюк/g, "Küyük" ],
    [ /КУЮК/g, "KÜYÜK" ],
    // медьюн
    [ /медьюн/g, "medyun" ],
    [ /Медьюн/g, "Medyun" ],
    [ /МЕДЬЮН/g, "MEDYUN" ],
    // месуль
    [ /месуль/g, "mesül" ],
    [ /Месуль/g, "Mesül" ],
    [ /МЕСУЛЬ/g, "MESÜL" ],
    [ /месули/g, "mesüli" ],
    [ /Месули/g, "Mesüli" ],
    [ /МЕСУЛИ/g, "MESÜLİ" ],
    // мефкуре
    [ /мефкуре/g, "mefküre" ],
    [ /Мефкуре/g, "Mefküre" ],
    [ /МЕФКУРЕ/g, "MEFKÜRE" ],
    // могедек
    [ /могедек/g, "mögedek" ],
    [ /Могедек/g, "Mögedek" ],
    [ /МОГЕДЕК/g, "MÖGEDEK" ],
    // муурь
    [ /муур/g, "müür" ],
    [ /Муур/g, "Müür" ],
    [ /МУУР/g, "MÜÜR" ],
    // муче
    [ /муче/g, "müçe" ],
    [ /Муче/g, "Müçe" ],
    [ /МУЧЕ/g, "MÜÇE" ],
    // муюз
    [ /муюз/g, "müyüz" ],
    [ /Муюз/g, "Müyüz" ],
    [ /МУЮЗ/g, "MÜYÜZ" ],
    // нумюне
    [ /нумюне/g, "nümüne" ],
    [ /Нумюне/g, "Nümüne" ],
    [ /НУМЮНЕ/g, "NÜMÜNE" ],
    // ог
    [ /(["\s(-])ог([^ъ])/g, "$1öг$2" ],
    [ /(["\s(-])Ог([^ъ])/g, "$1Öг$2" ],
    [ /(["\s(-])ОГ([^Ъ])/g, "$1ÖГ$2" ],
    // одеколон
    [ /одеколон/g, "odekolon" ],
    [ /Одеколон/g, "Odekolon" ],
    [ /ОДЕКОЛОН/g, "ODEKOLON" ],
    // океан
    [ /океан/g, "okean" ],
    [ /Океан/g, "Okean" ],
    [ /ОКЕАН/g, "OKEAN" ],
    // …ольчер
    [ /ольчер/g, "ölçer" ],
    [ /ОЛЬЧЕР/g, "ÖLÇER" ],
    // олимп
    [ /олимп/g, "olimp" ],
    [ /Олимп/g, "Olimp" ],
    [ /ОЛИМП/g, "OLİMP" ],
    // онен
    [ /онен/g, "onen" ],
    [ /оннен/g, "onnen" ],
    [ /Онен/g, "Onen" ],
    [ /Оннен/g, "Onnen" ],
    [ /ОНЕН/g, "ONEN" ],
    [ /ОННЕН/g, "ONNEN" ],
    // операция и однокоренные
    [ /опера/g, "opera" ],
    [ /Опера/g, "Opera" ],
    [ /ОПЕРА/g, "OPERA" ],
    // опция и однокоренные
    [ /опция/g, "optsiya" ],
    [ /Опция/g, "Optsiya" ],
    [ /ОПЦИЯ/g, "OPTSİYA" ],
    [ /опци/g, "optsi" ],
    [ /Опци/g, "Optsi" ],
    [ /ОПЦИ/g, "OPTSİ" ],
    // орден и ордер
    [ /([\s"'\(\)\-.,:;!?>\]])орде([нр])/g, "$1orde$2" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Орде([нр])/g, "$1Orde$2" ],
    [ /([\s"'\(\)\-.,:;!?>\]])ОРДЕ([НР])/g, "$1ORDE$2" ],
    // оригинал
    [ /оригинал/g, "original" ],
    [ /Оригинал/g, "Original" ],
    [ /ОРИГИНАЛ/g, "ORİGİNAL" ],
    // ориентир
    [ /ориент/g, "oriyent" ],
    [ /Ориент/g, "Oriyent" ],
    [ /ОРИЕНТ/g, "ORİYENT" ],
    // оркестр
    [ /оркестр/g, "orkestr" ],
    [ /Оркестр/g, "Orkestr" ],
    [ /ОРКЕСТР/g, "ORKESTR" ],
    // офис
    [ /офис/g, "ofis" ],
    [ /Офис/g, "Ofis" ],
    [ /ОФИС/g, "OFİS" ],
    // офицер
    [ /офицер/g, "ofitser" ],
    [ /Офицер/g, "Ofitser" ],
    [ /ОФИЦЕР/g, "OFİTSER" ],
    // офсет
    [ /офсет/g, "ofset" ],
    [ /Офсет/g, "Ofset" ],
    [ /ОФСЕТ/g, "OFSET" ],
    // оюннен
    [ /оюннен/g, "oyunnen" ],
    [ /Оюннен/g, "Oyunnen" ],
    [ /ОЮННЕН/g, "OYUNNEN" ],
    // публикация и однокоренные
    [ /публик/g, "publik" ],
    [ /Публик/g, "Publik" ],
    [ /ПУБЛИК/g, "PUBLİK" ],
    // публицистика и однокоренные
    [ /публиц/g, "publits" ],
    [ /Публиц/g, "Publits" ],
    [ /ПУБЛИЦ/g, "PUBLİTS" ],
    // сурет
    [ /сурет/g, "süret" ],
    [ /Сурет/g, "Süret" ],
    [ /СУРЕТ/g, "SÜRET" ],
    // ультиматум и однокоренные
    [ /ультимат/g, "ultimat" ],
    [ /Ультимат/g, "Ultimat" ],
    [ /УЛЬТИМАТ/g, "ULTIMAT" ],
    // ультра
    [ /ультра/g, "ultra" ],
    [ /Ультра/g, "Ultra" ],
    [ /УЛЬТРА/g, "ULTRA" ],
    // уника
    [ /([\s"'\(\)\-.,:;!?>\]])уник/g, "$1unik" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Уник/g, "$1Unik" ],
    [ /([\s"'\(\)\-.,:;!?>\]])УНИК/g, "$1UNİK" ],
    // универcаль, универмаг, университет
    [ /универ/g, "univer" ],
    [ /Универ/g, "Univer" ],
    [ /УНИВЕР/g, "UNİVER" ],
    // унтер
    [ /([\s"'\(\)\-.,:;!?>\]])унтер/g, "$1unter" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Унтер/g, "$1Unter" ],
    [ /([\s"'\(\)\-.,:;!?>\]])УНТЕР/g, "$1UNTER" ],
    // урьян
    [ /урьян/g, "uryan" ],
    [ /Урьян/g, "Uryan" ],
    [ /УРЬЯН/g, "URYAN" ],
    // джонк
    [ /джонкю/g, "cönkü" ],
    [ /Джонкю/g, "Cönkü" ],
    [ /ДЖОНКЮ/g, "CÖNKÜ" ],
    [ /джонк([^ъ])/g, "cönk$1" ],
    [ /Джонк([^ъ])/g, "Cönk$1" ],
    [ /ДЖОНК([^Ъ])/g, "CÖNK$1" ],
    // джуньджу
    [ /джуньджу/g, "cüncü" ],
    [ /Джуньджу/g, "Cüncü" ],
    [ /ДЖУНЬДЖУ/g, "CÜNCÜ" ],
    // шовинизм и однокоренные
    [ /шовини/g, "şovini" ],
    [ /Шовини/g, "Şovini" ],
    [ /ШОВИНИ/g, "ŞOVİNİ" ],
    // шоссе
    [ /шоссе/g, "şosse" ],
    [ /Шоссе/g, "Şosse" ],
    [ /ШОССЕ/g, "ŞOSSE" ],
    // шофёр
    [ /шоф[её]р/g, "şoför" ],
    [ /Шоф[её]р/g, "Şoför" ],
    [ /ШОФ[ЕЁ]Р/g, "ŞOFÖR" ],
    // шунен
    [ /шунен/g, "şunen" ],
    [ /шуннен/g, "şunnen" ],
    [ /Шунен/g, "Şunen" ],
    [ /Шуннен/g, "Şunnen" ],
    [ /ШУНЕН/g, "ŞUNEN" ],
    [ /ШУННЕН/g, "ŞUNNEN" ],
    // юз
    [ /([\s"'\(\)\-.,:;!?>\]])юз([\s"'.,:;!?\)\-\[<])/g, "$1yüz$2" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Юз([\s"'.,:;!?\)\-\[<])/g, "$1Yüz$2" ],
    [ /([\s"'\(\)\-.,:;!?>\]])ЮЗ([\s"'.,:;!?\)\-\[<])/g, "$1YÜZ$2" ],
    // юзбашы
    [ /([\s"'\(\)\-.,:;!?>\]])юзбашы/g, "$1yüzbaşı" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Юзбашы/g, "$1Yüzbaşı" ],
    [ /([\s"'\(\)\-.,:;!?>\]])ЮЗБАШЫ/g, "$1YÜZBAŞI" ],
    // юзйыллыкъ
    [ /([\s"'\(\)\-.,:;!?>\]])юзйыл/g, "$1yüzyıl" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Юзйыл/g, "$1Yüzyıl" ],
    [ /([\s"'\(\)\-.,:;!?>\]])ЮЗЙЫЛ/g, "$1YÜZYIL" ],
    // юк
    [ /([\s"'\(\)\-.,:;!?>\]])юк([^ъ])/g, "$1yüк$2" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Юк([^ъ])/g, "$1Yüк$2" ],
    [ /([\s"'\(\)\-.,:;!?>\]])ЮК([^Ъ])/g, "$1YÜК$2" ],
    // юрип
    [ /([\s"'\(\)\-.,:;!?>\]])юрип/g, "$1yürip" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Юрип/g, "$1Yüzrip" ],
    [ /([\s"'\(\)\-.,:;!?>\]])ЮРИП/g, "$1YÜRİP" ],
    // 3-юнджи, 4-юнджи
    [ /([34])-юнджи/g, "$1-ünci" ],
    [ /([34])-ЮНДЖИ/g, "$1-ÜNCİ" ],
    // некоторые глагольные формы на -ама, -алма
    // букама, букалма
    [ /([\s"'\(\)\-.,:;!?>\]])букама/g, "$1bükama" ],
    [ /([\s"'\(\)\-.,:;!?>\]])букалма/g, "$1bükalma" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Букама/g, "$1Bükama" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Букалма/g, "$1Bükalma" ],
    [ /([\s"'\(\)\-.,:;!?>\]])БУКАМА/g, "$1BÜKAMA" ],
    [ /([\s"'\(\)\-.,:;!?>\]])БУКАМА/g, "$1BÜKALMA" ],
    // комама, комалма
    [ /([\s"'\(\)\-.,:;!?>\]])комама/g, "$1kömama" ],
    [ /([\s"'\(\)\-.,:;!?>\]])комалма/g, "$1kömalma" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Комама/g, "$1Kömama" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Комалма/g, "$1Kömalma" ],
    [ /([\s"'\(\)\-.,:;!?>\]])КОМАМА/g, "$1KÖMAMA" ],
    [ /([\s"'\(\)\-.,:;!?>\]])КОМАМА/g, "$1KÖMALMA" ],
    // корама, коралма
    [ /([\s"'\(\)\-.,:;!?>\]])корама/g, "$1körama" ],
    [ /([\s"'\(\)\-.,:;!?>\]])коралма/g, "$1köralma" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Корама/g, "$1Körama" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Коралма/g, "$1Köralma" ],
    [ /([\s"'\(\)\-.,:;!?>\]])КОРАМА/g, "$1KÖRAMA" ],
    [ /([\s"'\(\)\-.,:;!?>\]])КОРАМА/g, "$1KÖRALMA" ],
    // кочама, кочалма
    [ /([\s"'\(\)\-.,:;!?>\]])кочама/g, "$1köçama" ],
    [ /([\s"'\(\)\-.,:;!?>\]])кочалма/g, "$1köçalma" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Кочама/g, "$1Köçama" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Кочалма/g, "$1Köçalma" ],
    [ /([\s"'\(\)\-.,:;!?>\]])КОЧАМА/g, "$1KÖÇAMA" ],
    [ /([\s"'\(\)\-.,:;!?>\]])КОЧАМА/g, "$1KÖÇALMA" ],
    // куяма, куялма
    [ /([\s"'\(\)\-.,:;!?>\]])куяма/g, "$1küyama" ],
    [ /([\s"'\(\)\-.,:;!?>\]])куялма/g, "$1küyalma" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Куяма/g, "$1Küyama" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Куялма/g, "$1Küyalma" ],
    [ /([\s"'\(\)\-.,:;!?>\]])КУЯАМА/g, "$1KÜYAMA" ],
    [ /([\s"'\(\)\-.,:;!?>\]])КУЯАМА/g, "$1KÜYALMA" ],
    // кулама, кулалма
    //ver=/([\s"'\(\)\-.,:;!?>\]])кулама/g; //str=str.replace(ver, "$1külama")
    //ver=/([\s"'\(\)\-.,:;!?>\]])кулама/g, "$1külama" ],
    //ver=/([\s"'\(\)\-.,:;!?>\]])кулалма/g; //str=str.replace(ver, "$1külalma")
    //ver=/([\s"'\(\)\-.,:;!?>\]])кулалма/g, "$1külalma" ],
    //ver=/([\s"'\(\)\-.,:;!?>\]])Кулама/g; //str=str.replace(ver, "$1Külama")
    //ver=/([\s"'\(\)\-.,:;!?>\]])Кулама/g, "$1Külama" ],
    //ver=/([\s"'\(\)\-.,:;!?>\]])Кулалма/g; //str=str.replace(ver, "$1Külalma")
    //ver=/([\s"'\(\)\-.,:;!?>\]])Кулалма/g, "$1Külalma" ],
    //ver=/([\s"'\(\)\-.,:;!?>\]])КУЛАМА/g; //str=str.replace(ver, "$1KÜLAMA")
    //ver=/([\s"'\(\)\-.,:;!?>\]])КУЛАМА/g, "$1KÜLAMA" ],
    //ver=/([\s"'\(\)\-.,:;!?>\]])КУЛАМА/g; //str=str.replace(ver, "$1KÜLALMA")
    //ver=/([\s"'\(\)\-.,:;!?>\]])КУЛАМА/g, "$1KÜLALMA" ],
    // кусама, кусалма
    [ /([\s"'\(\)\-.,:;!?>\]])кусама/g, "$1küsama" ],
    [ /([\s"'\(\)\-.,:;!?>\]])кусалма/g, "$1küsalma" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Кусама/g, "$1Küsama" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Кусалма/g, "$1Küsalma" ],
    [ /([\s"'\(\)\-.,:;!?>\]])КУСАМА/g, "$1KÜSAMA" ],
    [ /([\s"'\(\)\-.,:;!?>\]])КУСАМА/g, "$1KÜSALMA" ],
    // кутама, куталма
    [ /([\s"'\(\)\-.,:;!?>\]])кутама/g, "$1kütama" ],
    [ /([\s"'\(\)\-.,:;!?>\]])куталма/g, "$1kütalma" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Кутама/g, "$1Kütama" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Куталма/g, "$1Kütalma" ],
    [ /([\s"'\(\)\-.,:;!?>\]])КУТАМА/g, "$1KÜTAMA" ],
    [ /([\s"'\(\)\-.,:;!?>\]])КУТАМА/g, "$1KÜTALMA" ],
    // опама, опалма
    [ /([\s"'\(\)\-.,:;!?>\]])опама/g, "$1öpama" ],
    [ /([\s"'\(\)\-.,:;!?>\]])опалма/g, "$1öpalma" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Опама/g, "$1Öpama" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Опалма/g, "$1Öpalma" ],
    [ /([\s"'\(\)\-.,:;!?>\]])ОПАМА/g, "$1ÖPAMA" ],
    [ /([\s"'\(\)\-.,:;!?>\]])ОПАМА/g, "$1ÖPALMA" ],
    // осама, осалма
    [ /([\s"'\(\)\-.,:;!?>\]])осама/g, "$1ösama" ],
    [ /([\s"'\(\)\-.,:;!?>\]])осалма/g, "$1ösalma" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Осама/g, "$1Ösama" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Осалма/g, "$1Ösalma" ],
    [ /([\s"'\(\)\-.,:;!?>\]])ОСАМА/g, "$1ÖSAMA" ],
    [ /([\s"'\(\)\-.,:;!?>\]])ОСАМА/g, "$1ÖSALMA" ],
    // отама, оталма
    //ver=/([\s"'\(\)\-.,:;!?>\]])отама/g; //str=str.replace(ver, "$1ötama")
    //ver=/([\s"'\(\)\-.,:;!?>\]])отама/g, "$1ötama" ],
    [ /([\s"'\(\)\-.,:;!?>\]])оталма/g, "$1ötalma" ],
    //ver=/([\s"'\(\)\-.,:;!?>\]])Отама/g; //str=str.replace(ver, "$1Ötama")
    //ver=/([\s"'\(\)\-.,:;!?>\]])Отама/g, "$1Ötama" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Оталма/g, "$1Ötalma" ],
    //ver=/([\s"'\(\)\-.,:;!?>\]])ОТАМА/g; //str=str.replace(ver, "$1ÖTAMA")
    //ver=/([\s"'\(\)\-.,:;!?>\]])ОТАМА/g, "$1ÖTAMA" ],
    [ /([\s"'\(\)\-.,:;!?>\]])ОТАМА/g, "$1ÖTALMA" ],
    // узама, узалма
    //ver=/([\s"'\(\)\-.,:;!?>\]])узама/g; //str=str.replace(ver, "$1üzama")
    //ver=/([\s"'\(\)\-.,:;!?>\]])узама/g, "$1üzama" ],
    [ /([\s"'\(\)\-.,:;!?>\]])узалма/g, "$1üzalma" ],
    //ver=/([\s"'\(\)\-.,:;!?>\]])Узама/g; //str=str.replace(ver, "$1Üzama")
    //ver=/([\s"'\(\)\-.,:;!?>\]])Узама/g, "$1Üzama" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Узалма/g, "$1BÜzalma" ],
    //ver=/([\s"'\(\)\-.,:;!?>\]])УЗАМА/g; //str=str.replace(ver, "$1ÜZAMA")
    //ver=/([\s"'\(\)\-.,:;!?>\]])УЗАМА/g, "$1ÜZAMA" ],
    [ /([\s"'\(\)\-.,:;!?>\]])УЗАМА/g, "$1ÜZALMA" ],
    // утама, уталма
    [ /([\s"'\(\)\-.,:;!?>\]])утама/g, "$1ütama" ],
    [ /([\s"'\(\)\-.,:;!?>\]])уталма/g, "$1ütalma" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Утама/g, "$1Ütama" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Уталма/g, "$1BÜtalma" ],
    [ /([\s"'\(\)\-.,:;!?>\]])УТАМА/g, "$1ÜTAMA" ],
    [ /([\s"'\(\)\-.,:;!?>\]])УТАМА/g, "$1ÜTALMA" ],
    // Имена собственные
    [ /аджыумер/g, "acıümer" ],
    [ /Аджыумер/g, "Acıümer" ],
    [ /АДЖЫУМЕР/g, "ACIÜMER" ],
    [ /аджыусеин/g, "acıüsein" ],
    [ /Аджыусеин/g, "Acıüsein" ],
    [ /АДЖЫУСЕИН/g, "ACIÜSEİN" ],
    [ /боливия/g, "boliviya" ],
    [ /Боливия/g, "Boliviya" ],
    [ /БОЛИВИЯ/g, "BOLİVİYA" ],
    [ /([\s"'\(\)\-.,:;!?>\]])ишунь/g, "$1işün" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Ишунь/g, "$1İşün" ],
    [ /([\s"'\(\)\-.,:;!?>\]])ИШУНЬ/g, "$1İŞÜN" ],
    [ /корбекул/g, "körbekül" ],
    [ /Корбекул/g, "Körbekül" ],
    [ /КОРБЕКУЛ/g, "KÖRBEKÜL" ],
    [ /корьбекул/g, "körbekül" ],
    [ /Корьбекул/g, "Körbekül" ],
    [ /КОРЬБЕКУЛ/g, "KÖRBEKÜL" ],
    [ /куркулет/g, "kürkület" ],
    [ /Куркулет/g, "Kürkület" ],
    [ /КУРКУЛЕТ/g, "KÜRKÜLET" ],
    [ /къарагоз/g, "qaragöz" ],
    [ /Къарагоз/g, "Qaragöz" ],
    [ /КЪАРАГОЗ/g, "QARAGÖZ" ],
    [ /къуртумер/g, "qurtümer" ],
    [ /Къуртумер/g, "Qurtümer" ],
    [ /КЪУРТУМЕР/g, "QURTÜMER" ],
    [ /къуртусеин/g, "qurtüsein" ],
    [ /Къуртусеин/g, "Qurtüsein" ],
    [ /КЪУРТУСЕИН/g, "QURTÜSEİN" ],
    [ /марьино/g, "maryino" ],
    [ /Марьино/g, "Maryino" ],
    [ /МАРЬИНО/g, "MARYİNO" ],
    [ /одесса/g, "odessa" ],
    [ /Одесса/g, "Odessa" ],
    [ /ОДЕССА/g, "ODESSA" ],
    [ /одеса/g, "odesa" ],
    [ /Одеса/g, "Odesa" ],
    [ /ОДЕСА/g, "ODESA" ],
    [ /потелов/g, "potelov" ],
    [ /Потелов/g, "Potelov" ],
    [ /ПОТЕЛОВ/g, "POTELOV" ],
    [ /пушкин/g, "puşkin" ],
    [ /Пушкин/g, "Puşkin" ],
    [ /ПУШКИН/g, "PUŞKİN" ],
    [ /сеитумер/g, "seitümer" ],
    [ /Сеитумер/g, "Seitümer" ],
    [ /СЕИТУМЕР/g, "SEİTÜMER" ],
    [ /сеитусеин/g, "seitüsein" ],
    [ /Сеитусеин/g, "Seitüsein" ],
    [ /СЕИТУСЕИН/g, "SEİTÜSEİN" ],
    [ /сейитумер/g, "seyitümer" ],
    [ /Сейитумер/g, "Seyitümer" ],
    [ /СЕЙИТУМЕР/g, "SEYİTÜMER" ],
    [ /сейитусеин/g, "seyitüsein" ],
    [ /Сейитусеин/g, "Seyitüsein" ],
    [ /СЕЙИТУСЕИН/g, "SEYİTÜSEİN" ],
    [ /щёлкино/g, "şçolkino" ],
    [ /Щёлкино/g, "Şçolkino" ],
    [ /ЩЁЛКИНО/g, "ŞÇOLKİNO" ],
    [ /эмирусеин/g, "emirüsein" ],
    [ /Эмирусеин/g, "Emirüsein" ],
    [ /ЭМИРУСЕИН/g, "EMİRÜSEİN" ],
    [ /юртер/g, "yurter" ],
    [ /Юртер/g, "Yurter" ],
    [ /ЮРТЕР/g, "YURTER" ],
    [ /ющенко/g, "yuşçenko" ],
    [ /Ющенко/g, "Yuşçenko" ],
    [ /ЮЩЕНКО/g, "YUŞÇENKO" ],
    // -ьон
    [ /([^\s])ьон/g, "$1yon" ],
    [ /([^\s])ЬОН/g, "$1YON" ],
    // Я
    [ /([\s"'\(\)\-.,:;!?>\]])Я([\s"'.,:;!?\)\-\[<])/g, "$1Ya$2" ],
    // Ё
    [ /([\s"'\(\)\-.,:;!?>\]])Ё([\s"'.,:;!?\)\-\[<])/g, "$1Yo$2" ],
    // йе
    [ /йе/g, "yye" ],
    [ /ЙЕ/g, "YYE" ],
    // йя
    [ /йя/g, "yya" ],
    [ /ЙЯ/g, "YYA" ],
    // 1. буквы гъ, къ, нъ, дж
    [ /гъ/g, "ğ" ],
    [ /Гъ/g, "Ğ" ],
    [ /ГЪ/g, "Ğ" ],
    [ /къ/g, "q" ],
    [ /Къ/g, "Q" ],
    [ /КЪ/g, "Q" ],
    [ /нъ/g, "ñ" ],
    [ /Нъ/g, "Ñ" ],
    [ /НЪ/g, "Ñ" ],
    [ /дж/g, "c" ],
    [ /Дж/g, "C" ],
    [ /ДЖ/g, "C" ],
    // 2. o', u' первый заход - ё и ю после согласных
    [ /([бвгджзйклмнпрстфхцчшщñcБВГДЖЗЙКЛМНПРСТФХЦЧШЩÑC])ю/g, "$1ü" ],
    [ /([бвгджзйклмнпрстфхцчшщñcБВГДЖЗЙКЛМНПРСТФХЦЧШЩÑC])Ю/g, "$1Ü" ],
    [ /([бвгджзйклмнпрстфхцчшщñcБВГДЖЗЙКЛМНПРСТФХЦЧШЩÑC])ё/g, "$1ö" ],
    [ /([бвгджзйклмнпрстфхцчшщñcБВГДЖЗЙКЛМНПРСТФХЦЧШЩÑC])Ё/g, "$1Ö" ],
    // 3. o', u' второй заход
    // буква u'
    // ю
    [ /([\s"'\(\)\-.,:;!?>\]/аыоуеиёюАЫОУЕИЁЮ])ю([бвгджзйклмнпрстфхцчшщcñ])([бвгджзйклмнпрстфхцчшщcñ])([ьеюэü])/g, "$1yü$2$3$4" ],
    [ /([\s"'\(\)\-.,:;!?>\]/АЫОУЕИЁЮ])Ю([БВГДЖЗЙКЛМНПРСТФХЦЧШЩCÑ])([БВГДЖЗЙКЛМНПРСТФХЦЧШЩCÑ])([ЬЕЮЭÜ])/g, "$1YÜ$2$3$4" ],
    [ /([\s"'\(\)\-.,:;!?>\]/(аыоуеиёюАЫОУЕИЁЮ])ю([бвгджзйклмнпрстфхцчшщcñ])([ьеюэü])/g, "$1yü$2$3" ],
    [ /([\s"'\(\)\-.,:;!?>\]/(АЫОУЕИЁЮ])Ю([БВГДЖЗЙКЛМНПРСТФХЦЧШЩCÑ])([ЬЕЮЭÜ])/g, "$1YÜ$2$3" ],
    [ /ю([бвгджзйклмнпрстфхцчшщcñ])([бвгджзйклмнпрстфхцчшщcñ])([ьеюэü])/g, "yü$1$2$3" ],
    [ /Ю([бвгджзйклмнпрстфхцчшщcñ])([бвгджзйклмнпрстфхцчшщcñ])([ьеюэü])/g, "Yü$1$2$3" ],
    [ /Ю([БВГДЖЗЙКЛМНПРСТФХЦЧШЩCÑ])([БВГДЖЗЙКЛМНПРСТФХЦЧШЩC,Ñ])([ЬЕЮЭÜ])/g, "YÜ$1$2$3" ],
    [ /ю([бвгджзйклмнпрстфхцчшщcñ])([ьеюэü])/g, "yü$1$2" ],
    [ /Ю([бвгджзйклмнпрстфхцчшщcñ])([ьеюэü])/g, "Yü$1$2" ],
    [ /Ю([БВГДЖЗЙКЛМНПРСТФХЦЧШЩCÑ])([ЬЕЮЭÜ])/g, "YÜ$1$2" ],
    // у и ую
    // после у или ую две согласных
    // строчная у
    [ /([\s"'\(\)\-.,:;!?>\]])([бгкмпшcБГКМПCШ])у([бвгджзйклмнпрстфхцчшщcñ])([бвгджзйклмнпрстфхцчшщcñ])([ьеёиюэü])/g, "$1$2ü$3$4$5" ],
    [ /([\s"'\(\)\-.,:;!?>\]])у([бвгджзйклмнпрстфхцчшщcñ])([бвгджзйклмнпрстфхцчшщcñ])([ьеёиюэü])/g, "$1ü$2$3$4" ],
    [ /([\s"'\(\)\-.,:;!?>\]])ую([бвгджзйклмнпрстфхцчшщcñ])([бвгджзйклмнпрстфхцчшщcñ])([ьеёиюэü])/g, "$1üyü$2$3$4" ],
    // заглавная У
    [ /([\s"'\(\)\-.,:;!?>\]])([бгкмпшcБГКМПШC])У([бвгджзйклмнпрстфхцчшщcñБВГДЖЗЙКЛМНПРСТФХЦЧШЩCÑ])([бвгджзйклмнпрстфхцчшщcñБВГДЖЗЙКЛМНПРСТФХЦЧШЩCÑ])([ьеёиюэüЬЕЁИЮЭÜ])/g, "$1$2Ü$3$4$5" ],
    [ /([\s"'\(\)\-.,:;!?>\]])У([бвгджзйклмнпрстфхцчшщcñБВГДЖЗЙКЛМНПРСТФХЦЧШЩCÑ])([бвгджзйклмнпрстфхцчшщcñБВГДЖЗЙКЛМНПРСТФХЦЧШЩCÑ])([ьеёиюэüЬЕЁИЮЭÜ])/g, "$1Ü$2$3$4" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Ую([бвгджзйклмнпрстфхцчшщcñБВГДЖЗЙКЛМНПРСТФХЦЧШЩCÑ])([бвгджзйклмнпрстфхцчшщcñБВГДЖЗЙКЛМНПРСТФХЦЧШЩCÑ])([ьеёиюэüЬЕЁИЮЭÜ])/g, "$1Üyü$2$3$4" ],
    [ /([\s"'\(\)\-.,:;!?>\]])УЮ([бвгджзйклмнпрстфхцчшщcñБВГДЖЗЙКЛМНПРСТФХЦЧШЩCÑ])([бвгджзйклмнпрстфхцчшщcñБВГДЖЗЙКЛМНПРСТФХЦЧШЩCÑ])([ьеёиюэüЬЕЁИЮЭÜ])/g, "$1ÜYÜ$2$3$4" ],
    // после у или ую одна согласная
    // строчная у
    [ /([\s"'\(\)\-.,:;!?>\]])([бгкмпшcБГКМПШC])у([бвгджзйклмнпрстфхцчшщycñ])([ьеёиюэü])/g, "$1$2ü$3$4" ],
    [ /([\s"'\(\)\-.,:;!?>\]])у([бвгджзйклмнпрстфхцчшщycñ])([ьеёиюэü])/g, "$1ü$2$3" ],
    [ /([\s"'\(\)\-.,:;!?>\]])ую([бвгджзйклмнпрстфхцчшщycñ])([ьеёиюэü])/g, "$1üyü$2$3" ],
    // заглавная У
    [ /([\s"'\(\)\-.,:;!?>\]])([бгкмпшcБГКМПШC])У([бвгджзйклмнпрстфхцчшщcñyБВГДЖЗЙКЛМНПРСТФХЦЧШЩCÑ])([ьеёиюüэЬЕЁИЮЭÜ])/g, "$1$2Ü$3$4" ],
    [ /([\s"'\(\)\-.,:;!?>\]])У([бвгджзйклмнпрстфхцчшщcñyБВГДЖЗЙКЛМНПРСТФХЦЧШЩCÑ])([ьеёиюüэЬЕЁИЮЭÜ])/g, "$1Ü$2$3" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Ую([бвгджзйклмнпрстфхцчшщcñyБВГДЖЗЙКЛМНПРСТФХЦЧШЩCÑ])([ьеёиюüэЬЕЁИЮЭÜ])/g, "$1Üyü$2$3" ],
    [ /([\s"'\(\)\-.,:;!?>\]])УЮ([бвгджзйклмнпрстфхцчшщcñyБВГДЖЗЙКЛМНПРСТФХЦЧШЩCÑ])([ьеёиюüэЬЕЁИЮЭÜ])/g, "$1ÜYÜ$2$3" ],
    // ещё один заход (не помню уже точно для чего он, но для чего-то нужен)
    [ /([\s"'\(\)\-.,:;!?>\]])([бгкмпшcБГКМПШC])у([бвгджзйклмнпрстфхцчшщycñ])([ьеёиюэü])/g, "$1$2ü$3$4" ],
    [ /([\s"'\(\)\-.,:;!?>\]])у([бвгджзйклмнпрстфхцчшщycñ])([ьеёиюэü])/g, "$1ü$2$3" ],
    [ /([\s"'\(\)\-.,:;!?>\]])([бгкмпшcБГКМПШC])У([бвгджзйклмнпрстфхцчшщcñyБВГДЖЗЙКЛМНПРСТФХЦЧШЩCÑ])([ьеёиюüэЬЕЁИЮЭÜ])/g, "$1$2Ü$3$4" ],
    [ /([\s"'\(\)\-.,:;!?>\]])У([бвгджзйклмнпрстфхцчшщcñyБВГДЖЗЙКЛМНПРСТФХЦЧШЩCÑ])([ьеёиюüэЬЕЁИЮЭÜ])/g, "$1Ü$2$3" ],
    // арабские слова на муи- муэ-
    [ /([\s"'\(\)\-.,:;!?>\]])му([иэ])/g, "$1\mü$2" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Му([иэ])/g, "$1\Mü$2" ],
    [ /([\s"'\(\)\-.,:;!?>\]])МУ([ИЭ])/g, "$1\MÜ$2" ],
    // буква o'
    // ё
    [ /([\s"'\(\)\-.,:;!?>\]])ё([бвгджзйклмнпрстфхцчшщcñ])([бвгджзйклмнпрстфхцчшщcñ])([ьеюü])/g, "$1yö$2$3$4" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Ё([бвгджзйклмнпрстфхцчшщcñ])([бвгджзйклмнпрстфхцчшщcñ])([ьеюü])/g, "$1Yö$2$3$4" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Ё([БВГДЖЗЙКЛМНПРСТФХЦЧШЩCÑ])([БВГДЖЗЙКЛМНПРСТФХЦЧШЩCÑ])([ЬЕЮÜ])/g, "$1YÖ$2$3$4" ],
    [ /([\s"'\(\)\-.,:;!?>\]])ё([бвгджзйклмнпрстфхцчшщcñ])([ьеёюэü])/g, "$1yö$2$3" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Ё([бвгджзйклмнпрстфхцчшщcñ])([ьеёюэü])/g, "$1Yö$2$3" ],
    [ /([\s"'\(\)\-.,:;!?>\]])Ё([БВГДЖЗЙКЛМНПРСТФХЦЧШЩCÑ])([ЬЕЁЮЭÜ])/g, "$1YÖ$2$3" ],
    // о
    // после о две согласных
    [ /([\s"'\(\)\-.,:;!?>\]])([бгкшcБГКШC])о([бвгджзйклмнпрстфхцчшщcñ])([бвгджзйклмнпрстфхцчшщcñ])([ьеёиюэü])/g, "$1$2ö$3$4$5" ],
    [ /([\s"'\(\)\-.,:;!?>\]])о([бвгджзйклмнпрстфхцчшщcñ])([бвгджзйклмнпрстфхцчшщcñ])([ьеёиюэü])/g, "$1ö$2$3$4" ],
    [ /([\s"'\(\)\-.,:;!?>\]])([-\s"'(бгкшcБГКШC])О([бвгджзйклмнпрстфхцчшщcñБВГДЖЗЙКЛМНПРСТФХЦЧШЩCÑ])([бвгджзйклмнпрстфхцчшщcñБВГДЖЗЙКЛМНПРСТФХЦЧШЩCÑ])([ьеёиюэüЬЕЁИЮЭÜ])/g, "$1$2Ö$3$4$5" ],
    // после о одна согласная
    [ /([\s"'\(\)\-.,:;!?>\]])О([бвгджзйклмнпрстфхцчшщcñБВГДЖЗЙКЛМНПРСТФХЦЧШЩCÑ])([бвгджзйклмнпрстфхцчшщcñБВГДЖЗЙКЛМНПРСТФХЦЧШЩCÑ])([ьеёиюэüЬЕЁИЮЭÜ])/g, "$1Ö$2$3$4" ],
    [ /([\s"'\(\)\-.,:;!?>\]])([-\s"'(бгкшcБГКШC])о([бвгджзйклмнпрстфхцчшщcñ])([ьеёиюэü])/g, "$1$2ö$3$4" ],
    [ /([\s"'\(\)\-.,:;!?>\]])о([бвгджзйклмнпрстфхцчшщcñ])([ьеёиюэü])/g, "$1ö$2$3" ],
    [ /([\s"'\(\)\-.,:;!?>\]])([-\s"'(бгкшcБГКШC])О([бвгджзйклмнпрстфхцчшщcñБВГДЖЗЙКЛМНПРСТФХЦЧШЩCÑ])([ьеёиюэüЬЕЁИЮЭÜ])/g, "$1$2Ö$3$4" ],
    [ /([\s"'\(\)\-.,:;!?>\]])О([бвгджзйклмнпрстфхцчшщcñБВГДЖЗЙКЛМНПРСТФХЦЧШЩCÑ])([ьеёиюэüЬЕЁИЮЭÜ])/g, "$1Ö$2$3" ],
    // 4. o', u' третий заход
    [ /([бвгджзйклмнпрстфхцчшщcñ])ю/g, "$1ü" ],
    [ /([БВГДЖЗЙКЛМНПРСТФХЦЧШЩCÑ])ю/g, "$1ü" ],
    [ /([БВГДЖЗЙКЛМНПРСТФХЦЧШЩCÑ])Ю/g, "$1Ü" ],
    [ /([бвгджзйклмнпрстфхцчшщcñ])ё/g, "$1ö" ],
    [ /([БВГДЖЗЙКЛМНПРСТФХЦЧШЩCÑ])ё/g, "$1ö" ],
    [ /([БВГДЖЗЙКЛМНПРСТФХЦЧШЩCÑ])Ё/g, "$1Ö" ],
    // 5. o', u' четвёртый заход
    [ /([ьеёюэöü])ю/g, "$1yü" ],
    [ /([ьеёюэÖÜ])Ю/g, "$1YÜ" ],
    // 6. буквы е и я
    //случаи е -> ye и я -> ya
    [ /([\s"'\(\)\-.,:;!?>\]/аыоуеиёэюяьъöüeАЫОУЕИЁЭЮЯЬЪÖÜE(])е/g, "$1ye" ],
    [ /([\s"'\(\)\-.,:;!?>\]/аыоуеиёэюяьъöüeАЫОУЕИЁЭЮЯЬЪÖÜE(])Е([АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯQCĞÑÜÖ\s"'.,:;!?\)\-\[<])/g, "$1YE$2" ],
    [ /([\s"'\(\)\-.,:;!?>\]/аыоуеиёэюяьъöÜeАЫОЯУЕИЁЭЮЯЬЪÖÜE(])Е([абвгдеёжзийклмнопрстуфхцчшщъыьэюяqcğñüö])/g, "$1Ye$2" ],
    [ /([\s"'\(\)\-.,:;!?>\]/аыоуеиёэюяöÜñqğьъeАЫОУЕИЁЭЮЯÖÜÑQĞЬЪE(])я/g, "$1ya" ],
    [ /([\s"'\(\)\-.,:;!?>\]/аыоуеиёэюяöÜñqğьъeАЫОУЕИЁЭЮЯÖÜÑQĞЬЪE(])Я([АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯQCĞÑÜÖ\s"'.,:;!?\)\-\[<])/g, "$1YA$2" ],
    [ /([\s"'\(\)\-.,:;!?>\]/аыоуеиёэюяöÜñqğьъeАЫОУЕИЁЭЮЯÖÜÑQĞЬЪE(])Я([абвгдеёжзийклмнопрстуфхцчшщъыьэюяqcğñüö])/g, "$1Ya$2" ],
    [ /([\s"'\(\)\-.,:;!?>\]/аыоуеиёэюяьъöüaeАЫОУЕИЁЭЮЯЬЪÖÜAE(])е/g, "$1ye" ],
    [ /([\s"'\(\)\-.,:;!?>\]/аыоуеиёэюяьъöüaeАЫОУЕИЁЭЮЯЬЪÖÜAE(])Е([АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯQCĞÑÜÖ\s"'.,:;!?\)\-\[<])/g, "$1YE$2" ],
    [ /([\s"'\(\)\-.,:;!?>\]/аыоуеиёэюяьъöÜaeАЫОУЕИЁЭЮЯЬЪÖÜAE(])Е([абвгдеёжзийклмнопрстуфхцчшщъыьэюяqcğñüö])/g, "$1Ye$2" ],
    [ /([\s"'\(\)\-.,:;!?>\]/аыоуеиёэюяöÜñqğьъaeАЫОУЕИЁЭЮЯÖÜÑQĞЬЪAE(])я/g, "$1ya" ],
    [ /([\s"'\(\)\-.,:;!?>\]/аыоуеиёэюяöÜñqğьъaeАЫОУЕИЁЭЮЯÖÜÑQĞЬЪAE(])Я([АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯQCĞÑÜÖ\s"'.,:;!?\)\-\[<])/g, "$1YA$2" ],
    [ /([\s"'\(\)\-.,:;!?>\]/аыоуеиёэюяöÜñqğьъaeАЫОУЕИЁЭЮЯÖÜÑQĞЬЪAE(])Я([абвгдеёжзийклмнопрстуфхцчшщъыьэюяqcğñüö])/g, "$1Ya$2" ],
    // остальные вхождения е и я
    [ /е/g, "e" ],
    [ /Е/g, "E" ],
    [ /я/g, "â" ],
    [ /Я/g, "Â" ],
    // 7. все оставшиеся вхождения о, у, ё, ю
    [ /Ю([АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯQCĞÑÜÖ])/g, "YU$1" ],
    [ /Ю/g, "Yu" ],
    [ /ю/g, "yu" ],
    [ /Ё([АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯQCĞÑÜÖ])/g, "YO$1" ],
    [ /Ё/g, "Yo" ],
    [ /ё/g, "yo" ],
    [ /у/g, "u" ],
    [ /У/g, "U" ],
    [ /о/g, "o" ],
    [ /О/g, "O" ],
    // 8. убираем ь и ъ
    [ /ь/g, "" ],
    [ /Ь/g, "" ],
    [ /ъ/g, "" ],
    [ /Ъ/g, "" ],
    // 9. все остальные буквы
    // заглавные Ц и Щ
    [ /Ц([АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯQCĞÑÜÖ])/g, "TS$1" ],
    [ /Ц/g, "Ts" ],
    [ /Щ([АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯQCĞÑÜÖ])/g, "ŞÇ$1" ],
    [ /Щ/g, "Şç" ],
    // строчные
    [ /а/g, "a" ],
    [ /б/g, "b" ],
    [ /в/g, "v" ],
    [ /г/g, "g" ],
    [ /д/g, "d" ],
    [ /ж/g, "j" ],
    [ /з/g, "z" ],
    [ /и/g, "i" ],
    [ /й/g, "y" ],
    [ /к/g, "k" ],
    [ /л/g, "l" ],
    [ /м/g, "m" ],
    [ /н/g, "n" ],
    [ /п/g, "p" ],
    [ /р/g, "r" ],
    [ /с/g, "s" ],
    [ /т/g, "t" ],
    [ /ф/g, "f" ],
    [ /х/g, "h" ],
    [ /ц/g, "ts" ],
    [ /ч/g, "ç" ],
    [ /ш/g, "ş" ],
    [ /щ/g, "şç" ],
    [ /ы/g, "ı" ],
    [ /э/g, "e" ],
    // заглавные
    [ /А/g, "A" ],
    [ /Б/g, "B" ],
    [ /В/g, "V" ],
    [ /Г/g, "G" ],
    [ /Д/g, "D" ],
    [ /Ж/g, "J" ],
    [ /З/g, "Z" ],
    [ /И/g, "İ" ],
    [ /Й/g, "Y" ],
    [ /К/g, "K" ],
    [ /Л/g, "L" ],
    [ /М/g, "M" ],
    [ /Н/g, "N" ],
    [ /П/g, "P" ],
    [ /Р/g, "R" ],
    [ /С/g, "S" ],
    [ /Т/g, "T" ],
    [ /Ф/g, "F" ],
    [ /Х/g, "H" ],
    [ /Ч/g, "Ç" ],
    [ /Ш/g, "Ş" ],
    [ /Ы/g, "I" ],
    [ /Э/g, "E" ]
    ]);
    
    
export function transliterate(word: string) {
    word = " " + word + " ";
      for (const i in cyr2lat) {
        word = word.replace(cyr2lat[i][0], cyr2lat[i][1] as string);
      }
      
      word = word.substring(1,word.length -1);
    return word;
};