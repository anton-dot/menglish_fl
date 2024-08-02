'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "311606980f6aaf5d8830ed5b6e3c0486",
".git/config": "748b924b5f86bd9de442eaeb9288d8f3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "97d95dc7df812a6cde7eabceef628cf5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "be70a709907eca12b92e9e6e4a5aa668",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "77cbad1f4a2b03a08532808d58fa652a",
".git/logs/refs/heads/main": "77cbad1f4a2b03a08532808d58fa652a",
".git/logs/refs/remotes/origin/HEAD": "2f3b362e99e0368a53550b629c08001a",
".git/logs/refs/remotes/origin/main": "ccf713e20ee9f104d10dbd90fb511399",
".git/objects/00/129cd88fc5223e6b06b8d0cef3de8526efc919": "c3fafb0845904db5efe5d91fbd20e7c9",
".git/objects/00/82d37fbcb4794d41f25d91c464b4848ec8cfcf": "ceaf3adc5a558f0fc0496648ba72a3a3",
".git/objects/00/d65600dadc0bf55f4ee37d2efec865dfd8a82e": "6d4d74202808656b88c464e400b8acd2",
".git/objects/01/31bf4b6ab80474184d6ef00b855953a7876891": "3ea148c45b4143f0e0baae01d7ad0fc2",
".git/objects/02/847b48fa4671f4fe5f2c6190a4721c32dfeb8e": "4237df5f1f1ac376ccf550b7dd1aeb33",
".git/objects/02/ab5c18623e9a0efc4b2d5c00f933c3d975c80b": "ddbacad275fbdea1c2444c1097a3963f",
".git/objects/02/e89a619e6995282a4d6fca647cd68626208dbd": "561f72fe37f6ac88b5930eced788df73",
".git/objects/04/19a36538828523e3f4cb1d1649c315b70beb06": "9557aeb3cb506e6c64263c26e0e6f10f",
".git/objects/04/9eef1ff32d68d006c4c52ea68db4ca3da33d2a": "c89b9130922d842b93c28a5f49e8f442",
".git/objects/06/8001edc8d59002e041678f7450b15e58fd42cf": "20259b32af87f563f5351fff0014a02b",
".git/objects/06/d1f14803297da20420bd63820021540c9bafab": "efa9095e912a76127176139bb3a44bc4",
".git/objects/06/f687e03796cf254e82ab4d581008e8567ca30d": "92d073547739e0dbd5de4966243ac809",
".git/objects/07/5578d84f06dac43c3c9b32832e6cb68f63cb65": "d6dfd00ea853aa8f1489d126e2c667a5",
".git/objects/08/8e4c03d94e9603501f11f4434c2fe8e5aa9feb": "a91cf40ec68a2122e865bab87505eba1",
".git/objects/09/ae7d3ed0db08fa2408ffdab97de4238924ba2c": "d89338e9d83de9d1ec22649dfcda21c0",
".git/objects/0a/646f203c73b845f9b07567bcfc9a6566730a95": "87a48094df78066a86e4ce609f4ceb40",
".git/objects/0e/1a607fb4728f37063fdaea3159e0e824c8ace3": "a4bf8affe6061dcb5e0c0405e1c4c420",
".git/objects/0e/d510fe4f4932a5b30c0431d8fbc3524d9b8239": "d4f1983280c3fcb191b29a7ea03dc959",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/12/fa978a79e9a64e2505dd3739f9b0642629ef6b": "5c6b9059b172ecc437bd073e2bacf190",
".git/objects/13/0d0b2c8573820258d3dc7b1b42afc7ed6a2a70": "a7629c05bc718779b9bcbb61ef2a5997",
".git/objects/13/c517c11116da4f02fdf6e472fa6492eb9800a8": "711bfcc2862693961e77587125c73360",
".git/objects/13/eed2dca400a587c72023c3c3f05d56f79ef26f": "6353878979648ca6953805e59978dc12",
".git/objects/15/56552968ff056a064d1826adbbcb6ba421dad8": "8b5468a5ed0c6a7a38665330eab27123",
".git/objects/16/12785f8d0ec5e3e0d0751f165415e3298c6997": "e2107b656200e288b1eb0e9b1c94930b",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1e/911bd60f7110e3ae3799258e6f7d47d100d2fa": "f70b58d9d773c0fcb3e9f2c0dd151c29",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/77c8834c85d77052fafd4a5b79426dc60ca383": "667c8cb2f980c7dc8819d6ffc0826691",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/d1f037e74a9f1b1568c157855d9a4bb36da8bf": "774f3ea7409599900900e3f0009235f8",
".git/objects/21/d10bad3e294f129ea09b9dc4e4d2f319fb8de5": "222b3dfc878fb9865514a85b1f4160d2",
".git/objects/21/e31622f2f89a539ea11c6b8cbbceaff0e5b2fe": "67bf55b7a5da6d5d2ff98e8f8b6aed68",
".git/objects/21/f517d0df15241a385df8701dcdd290c8efd42d": "91f8687e169bcf067174a283205e9386",
".git/objects/22/df1ea792edb15d1cff1ed544bfe61821caf6b4": "09ea7f8d5238f059ab4efe7ddd0cc95e",
".git/objects/23/0c5838d95e9cab7106831a9012795bd22dc749": "2fd0dc2430a7a34b12c7ca727ea4274f",
".git/objects/23/8d2b18bca05890429b3edeb1200d7200fb42c7": "c20e59ed82a92484511ae9000a3e46b1",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/da176ba4b60ec8559b2c9a933a3be0e5d90d5e": "d58c13a7b5e74c824345ae7886a0995a",
".git/objects/29/9524f2f8315853dd1119ce7beaa9b6a6b3a89e": "ddc9f6748c67accfcfae7a5868744ba1",
".git/objects/2a/bfd584503bc016fb07f8f9eaa26b29d8ef9dcb": "ff436a4d89494a99facd007664d3db51",
".git/objects/2a/f0caad9ce1bf9dce0beac1850416122bbeb45e": "b494f3b55b8366095d20fd88dc938386",
".git/objects/2c/938cc23b7c6f3ecaa98a6c96f5b08157849daf": "dbedfdaf90017a94993aa9d1f9d0260b",
".git/objects/2e/9b69562b97f88fbcaa7210dfa11dea500bc810": "800b2c64fec65c0c290f894f3a19e88e",
".git/objects/30/d75b64553a3ef5be2aa79251ca24b123c38d89": "e9acd2fd04e7fdc62d2ff57aae991b2e",
".git/objects/31/9c2df221dc39f4def39240b192b1024c1c9dd1": "c549a2c69a1544e4fad0637f22673de9",
".git/objects/33/d89492e75452b3f3f11fa74aba1381417f635a": "dfe4d084694a588905ce60c8a49f1e85",
".git/objects/34/bd6a343f284c4f8ac196dd5f1edccff382a97e": "b518a48d99314a4d8cd0159171a70f00",
".git/objects/35/87f82f785694686c032c4fa31517b27177dfaf": "912b8ffad15b789ef18ab5d604e182de",
".git/objects/36/37ac2d1803125e65f8df0872e9eb0dc78aa84e": "b8b923d89134630445741d478681687f",
".git/objects/36/6bd003c13259f097a972f4de2395337332ff6f": "931313dc3b813579b63c3d9a32bc3e82",
".git/objects/39/5467693da7a7734d09477ad8acb72582102eb8": "abe6a1db18b49087990b6b46ae87090f",
".git/objects/39/684bdc9f817d9599310d7132d258f1830a134d": "3daee7324fbece8be36ca34d5d9c272e",
".git/objects/3a/eb2b879d9a3431e8590c6638bf3cb7cd1cdb4f": "ab39ddcb126b5c9988d1d28bf41046bb",
".git/objects/3b/0bab01c75b81b10b1668a777664cc7a4a4e471": "73d2ac8d5d41ce15480e5a120ac42ba3",
".git/objects/3b/41981f84fa853e53784f2b99ede8ca0f1b690f": "f627e957e1e4c62cd209b6c61751d95d",
".git/objects/3c/2aded7ea7a32380bb01d737bdb04fcf01b137f": "16423cda7e91bad90171c781d53b05a4",
".git/objects/3d/c2c4774da6447fc38dec2cae80e4f5c5883edc": "abe937f8f25a4d0f09f8d53bf7753ef9",
".git/objects/3e/14471887ea84827c45e7086da34fe4abb8086c": "190b24c3e3759c1c22bd644bc29ddde6",
".git/objects/3e/465790e34b17c7ec0fa60848a4ff25a5273325": "d31e6741fdc1dea3140f5134b08870ad",
".git/objects/3f/765474ccb055900631ff04e8882eb8c65592d6": "448b4594d6ba0c0cdc04a020914f0efc",
".git/objects/40/37d1a2ab062b790fdcb7d3438796c96247933b": "b08ae9cf9e476cec8cf99bcb609e9fd3",
".git/objects/40/dd5490794b54a297e2d1c85acf4365b33ad3d2": "c8675b77a27b80cbb8a96688705c104b",
".git/objects/41/2983516964c87f3fecff626d8e9c6cc52ce1d9": "95f479215c719cb15087c91cd8b84499",
".git/objects/43/4160f156ace3f691c90a8b510484939f67121b": "cf161b9116cd7ce1a24a8db28740c718",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/c6ca23bdfba2f0602f8bcaf1aaca49377cd941": "640e918bb3dfe706c30ecfec7ec0f08c",
".git/objects/47/21783244898d649e9bd78afce026b95263eb09": "96fca947f1cd8b2cbb6da6ea81e6a4cc",
".git/objects/49/38215c7cef5ab86681bc5a750f599cef0c394c": "5e59d2009e2f697080816e98521621bf",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/bab48d07c0a4007b9016cf0e999644d563f4d0": "af505f8d457a18a9154741651bccc968",
".git/objects/4a/314c75f9d467274335bc20a6b390cd4b423b0d": "47a9725fcf0c5156200b89e0c51280f4",
".git/objects/4a/3e003cb07df78223d3a9c7fa082ed9d84008a0": "d59f8feb7f3674b325da8b16520a0d8b",
".git/objects/4a/e3abc5b87bc723c1591f8ab227b162b44d4cb7": "21a3e58ce68a2d48127df56d1d4fe672",
".git/objects/4b/31587cd034da1abc85aaec8011d0c458d170ad": "f252659fcf6894127367a3d52c010431",
".git/objects/4b/d7f2b6999afa84d78664e9461203083840480a": "0b43b9b8362cee133fa55b42afd7149e",
".git/objects/4c/a87e97a78f9fbfc8b658e55f0b093cea9fa966": "36aee5347c60bb13811805a540b4ed9c",
".git/objects/4d/6a862ccd4ff6fe15fead5d094fddad63850946": "5be885f7b4b45e98724e9fa5c7a39542",
".git/objects/4d/a8e51e1656d57902e691e59a56898ddd9871cc": "9d4b4777bb04d7673a24c49e78f464c0",
".git/objects/4e/2a11c712d0b25bf58a14c3254f4a62e21edc6d": "66157e8b2fea0625efd7a9c60632833f",
".git/objects/4e/4f91971dd4b2fb60e73bb9e275b6a3bebf4cc2": "c7bafc15d6650d42f44ad15ad9969736",
".git/objects/4e/74e2e28f38c080caba203446730ff4a76808ae": "05e35f684e954ba3eed740f19f1ab845",
".git/objects/4e/8f703fd33464e0add8c7e5dd65b8dc411d9bc3": "d2d98033b19164c77c9abc8f1497ddae",
".git/objects/50/590b3f67d1ada81d087ff26dd0bbb051195d27": "552332ec6d2b0b464082f90d1f51a864",
".git/objects/52/9717e84c38810d0bb88938200d5be6f49e9a70": "990a17f0eda57e7d5ab1f66d58f2d150",
".git/objects/52/af84e7e7b2049d7e4f97b9f11ba74318e5dc49": "e812783c82d26120d4ccab405789b4bc",
".git/objects/52/c139f10f88c4b48b6623c4c0ac7cea418bcfb9": "e7941613b55bf92bf4437c6a402c7574",
".git/objects/55/d41520f535a217b1ec4bcfc1c32e9c00b84361": "ecb87bcf9b43f620a256844c1ff9a86c",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/5730d23ce159ae3085f0de6b1a9021be661285": "16006e836518853355c766882c9fae34",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/d713b0a45bef06bf77e0eef09f3f093419b8c5": "f90de6803e5ce5e496c992154fb10031",
".git/objects/59/91ea1bc067c02c0b4793c00ce7e61883cc9181": "57ab7837cead04a0585c7618a3d21122",
".git/objects/5a/bc0307282899670bafdd4003ba617a0c1b1d99": "47fcb7422f7892fd07ad3c2a58c65dfa",
".git/objects/5e/0ec6b01db11e89bf0f8b5c474acfcdd725d29e": "a1cee2a61c346631d64dcccb66196692",
".git/objects/5e/bba2c52477d82f9234fbca4cc2390283b3c5f1": "550670bb1c8bf476be863488ffc8e0f4",
".git/objects/5f/d5940bb3dc12734f75e103d89eb6c1527b01fe": "50f78e79e2daf46378281dcb4ca96e53",
".git/objects/61/08ef497c0f6765bb6e8c8f24f4f0275b6e9153": "2a9ddfe6694a973e4c9c96501187b74d",
".git/objects/61/5eacfea21ca427846b3d06d23c4689d208841c": "63149627f5983346478d0b4e9b8d314c",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/62/e184b67c7af9cdfe5fb0ffa9f5774a740c8c33": "7e26ba1836900cb89b44560118e05758",
".git/objects/62/e8e374a24953b144b1653edc15a6337c7c69f8": "da3cab6c9a01526ad4eb3e2e85ea2bf9",
".git/objects/63/ce5a07f35664c5179a7a63e87090e29c141ecf": "4829a1420e6704986192e5de8550fc0b",
".git/objects/64/5b4f4b22ab0cec2e2b81faf5e65d64de921cfd": "22a72faeb85c1f9d797b0a3bdd440467",
".git/objects/65/0e6f5a0c1102c862f6bc412ab396287286b48d": "1863954e34e799a1bd62cbfb96eceb09",
".git/objects/65/5b79fd4bf2005fbfbcf8d481af091da2ca9e12": "cd5579051bc1a68700d44c2c50046b46",
".git/objects/65/c851723cf09a00d76b3e998ebeba1248d8694f": "21aa8e0202c2bca6b1c891cae8e7ccd3",
".git/objects/67/2f94dac7da7a43202cf35d2efc8412fdcdff7a": "4ea6e8a085229ab165b99b78b1328b33",
".git/objects/69/216bad5cb04f304a1bf072781f65f6bf0b1696": "e8c1b9a1d5af0735452f9090e4308243",
".git/objects/69/4b9b58d8d8e69b2ef8b219df0bff33d6b01cec": "b9ef348a3e9ff6cee13c548d3d268d39",
".git/objects/69/a74a35d2c4fedce39ccb4064ebac14106e4b94": "8513b939eaf72af4882787ecbdd12f5b",
".git/objects/69/d97d6bb17ad5bbce74444c41a5b1eab1392e6b": "5ce80231fdec2c5058e827fc482828f2",
".git/objects/6a/5381bf2070e5083fec19d1be592ed8ddf4c983": "603c6b3309bdb9d6c708a0efca19ab5f",
".git/objects/6a/939b29c26672933b3429c5ac716cd12df34a85": "ea723acc08e875f5a703978fd2503ee6",
".git/objects/6c/2c0625639b66cbcff70a645069bdeeb3e04df9": "ddac188bdda6d0759d7c2d3494bc08e8",
".git/objects/6c/f5f20c456dbde0f77537280d35c4bedb8babb0": "e4f74e552a3810f9def60abc0a0d2696",
".git/objects/6e/a6aa42d4cb07820478b08066a12f8049e2244a": "219fd991cb4029d292f823f7d2f11cdb",
".git/objects/6e/e3a3bd5b52860ea3e99fdf8633ad683943245e": "266e495eae7e188a8de4d1dccdaf0fdd",
".git/objects/70/f8047e2b2fdb4861ac21d5ab7a7240c900c3bd": "a94e24008611aedb6253b58ab9be35ee",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/73/93e75b3d930a9a1d27af91202b7eb4bc52ee3b": "3e4f2cacbd03ee506484b8fda446e2c7",
".git/objects/75/e2dcc312e2f09b4aba33568d723df9d0c016de": "5fe45ae320def11aa1ba476d5fce439d",
".git/objects/77/fb85e7c96e0e470ecc9efcfdecb25b0b5546bf": "15b93658c7fedecaff0c335c80e1bcf6",
".git/objects/78/fe6ef702864dd62f3f3df7780ea833a0a5440c": "6820bef1a6974c1d971db21b83ca5006",
".git/objects/7a/5bccb70710672c9fc91cf4871ee4f6044d5b86": "65ee592021a94ca7e1e14b69eec6e0b3",
".git/objects/7b/7be92351dfd773c7519cde6748d89d2f0f3707": "205adad89e3446154cae1f9a6a251747",
".git/objects/7d/084b212bec1b8afbd61fc022350e5ed61ecdac": "f8726cd4995c864bb1f19e41fd6bcd02",
".git/objects/7d/c1f9887f4b4ce6c95192498fd567114f63d400": "6b292c01531046a590cfe8f16ada71cb",
".git/objects/80/c033ea9032655c6c5cbf5158451c9e33218ac3": "0832f7e095a18d8e5d2e67b36f59a86d",
".git/objects/81/c1c1d4dad87adac35bef210968e1cbe8cc5a04": "3ee514ac68a696c3273c3562b5ecb70b",
".git/objects/82/529ae5d05bcb91b0bc25f120666bdb47367fe9": "9b41e1a3c3c2e7dc6c67a331e123772b",
".git/objects/82/d107a936bc1f8194bdde352d3da678a5187e0a": "d694e6e4b15ae4cec21468fe8e87d873",
".git/objects/83/8a2ee51afcaa5701a8702f7051a332109ac6fa": "d21d0e15deb5a8da45396bb61785cbc0",
".git/objects/85/0bc213124993751ae6bf0b0b7471cdfc3d0207": "c95a1f1f83a8822d6eea7ffd1e29772d",
".git/objects/85/61e181adf05fbc285c993cb4664872cd11453f": "212af69c2503fbefa5d12f89ba8cebb7",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/06f0819f1f2c69204ede18e94a064e877a895a": "116a10580c1679103df6cc6b2a07f728",
".git/objects/88/507222ce06ad86efc7856f14837ae147d0209c": "1cad51a637e772ea36730df154bd03bb",
".git/objects/89/16da67cd7db47af19e155944d41953a64fbb27": "34126f58221bac89ee131c3a32e05554",
".git/objects/89/1ffbc0d8c9ede5e3fa1e789ff0d76ed47a57ae": "898a67720f893858df0051adb142d5bf",
".git/objects/8a/9f73252c7abc7147492ce4f2424ca77c53d346": "166704efcfca372c41ca51701911b210",
".git/objects/8d/24f1405eee2f40bdbd074bb7f5f3ec4c9b5765": "8de397d259d3902a0d24eab672dd2597",
".git/objects/8d/89a94751374c4a45f24934a8bf86778964af9a": "29c355f18525e0933169f8a475b16049",
".git/objects/92/03d285dc0398044821f6af8a26775f55b4ed8c": "64476f772201524071cac5a8e6916835",
".git/objects/93/4c95aaddbd14140d363df489e4f11c4a75b818": "ad951f605e0b325e2410e8f0382ea555",
".git/objects/93/6fa14ad55eb552df88a078775c83f13a26db7b": "8aefb30c30131e3ba3a2e6eb81f832ff",
".git/objects/93/bb77e9a28bf32333ffe0fc9ede5f729e84a0fe": "edd0c878e915024505e6667aa2b2ed5c",
".git/objects/94/a5c26fc2f6446c139996bc45a946c6773d2bc1": "dab7e1009e32347e7678f34aed9db97c",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/928635b0e3ca83feb9400c473f8fa56ea650b9": "19bfbd7b6735cebda4a76fa4bbe64aa8",
".git/objects/96/d09156864eb5c1d6acbdc4a491ae9cc1a540db": "28ec333cf9bdc9c1558810ae24c13b22",
".git/objects/97/de3550caef0a0a231bed080e42e7e51706f8f1": "e956b45d180cb8a4b1279d3f52605d1e",
".git/objects/97/e5dc9af6e1093966c5cd42d608fd6fbb6a0c59": "769bbf0edfb872ed024f198c9d8d02c4",
".git/objects/98/113edad0b8f318ad0e0aad5b7a57977472db5a": "1a4ddb38c4458d3733e837e500f5331f",
".git/objects/98/fa1f5afbac994d3c7452dcd57460c15d6a75c4": "00a3bd65c3eeba01bf45adc6eab2d424",
".git/objects/99/007a36810cf6cb553f21373b5b8f5b2bcded70": "bea710bdd538243f608646fea6401572",
".git/objects/9a/6da37d035127c1b1bf28c7a8cfba8c5fb8536f": "155d766b0ffbae105ecce6c6259754ee",
".git/objects/9a/e868495b0f793c7cfd5d04fc61cabaaa703ef9": "9d69c158c69cf88a42eaa82d4e3b3765",
".git/objects/9b/b64588033205852052f2a06b062b0b87171671": "578133e1591cfcd9856239f6beb37c1b",
".git/objects/9b/e97c527ff84aa66eb135843a0587fc7df8f2e9": "088e10151958d728863af93ab8bb9d38",
".git/objects/9d/3b7901a1bcb7550bf5531cc2d6109be573d95f": "35c3fc8639a93073bfe2118795d6d1b2",
".git/objects/9e/a5399aa023fc32df57a9e8adefcf1631ef0a2c": "c46e48166350236999f9203c449d1615",
".git/objects/a1/417b81810048d64531292585118a93bc305200": "82ad4a7c4079dcbf4e6749f669659409",
".git/objects/a1/bb213dcdb56715831fca3d1d8e5a5daf97cfd0": "a540e70b9cb2cca1c1bf7dc1acba90ce",
".git/objects/a4/47a7c85c3b8098875f564d9a2415a3b9771535": "060ff67784fc93b1944fafb40308be87",
".git/objects/a4/8815639a5647bb0b471623d1033c0a0a860904": "69c26ef66b7661e076d73e3336550f88",
".git/objects/a4/f42ed7095d7a4a90e9e69cefd5bc340c96f901": "02b092c828b5b67fa52ebedb6b40d839",
".git/objects/a7/c7726e2b8958c61fc3e53260cc43c2f2dfd4df": "dd8a2c3ef6e2257b3c56553130fc5b80",
".git/objects/a8/d5eed8ec748c95469e174dbde7a6b995f3b8bf": "6a835bf558f2a4b6e67d5e759f4c111f",
".git/objects/a9/7c35aa3eacbd14ffb7457b0fb5f506527e9565": "5f6495a6bd8535ede0fefac90da58954",
".git/objects/ad/386549e4009ec78ad8e2820299a6876d1c7522": "a17a7f2a6bd0ad9035cde13c40224f90",
".git/objects/ae/12c2c6edec80a1c950fb176ff7e2517594036c": "7156eb97ddff23b994abd55b57e2ebf6",
".git/objects/ae/f77b1d97b4958aeb5d9e11db0717d687df18ea": "9a13d59722563fcf8f23def60f30d870",
".git/objects/b0/5f23d7cd4499d28094580e08108ed765435922": "19e588c336d7f58a6687d2ae64ededff",
".git/objects/b0/bd259a23b1749a11a5415582e1fb0e820996a7": "2e20266e3e9a975380f0d8a6f887cdd6",
".git/objects/b3/1a2a744cd1ccd2bfe2e058af0eab50ef4239af": "928d39d5ddf3ea8d00560d2571805e45",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/1ae94aee7533e1c0d69668d0384c11e2661ea1": "ab210949351396372bd6d54cb3aec171",
".git/objects/b5/84ef44c7699845ae8af63ff08cf413a89a05fc": "d7587e5678ded1bfed39530312201c57",
".git/objects/b5/bce626c140bab867014aadc46db346663ab73f": "874f89511ef41c6a7b581b4a9dc6320d",
".git/objects/b5/c6ca710c937527ca8d2d344214243d6db33832": "1e6ca9406fc3150067eabb10040766e1",
".git/objects/b6/5164de707ffeaf0adfca5fca65532bf97e6903": "b0c794f74453ae77a83e942b9d58d94f",
".git/objects/b7/3e9c0bbeb7e7cb3e18cee95d0619c6bac03511": "70777b17ee9123fc032676a237b22020",
".git/objects/b7/7a6099d23e572de11f96e8e84c01340ae2df75": "95340133a6e944af2514ab9d4bc85df2",
".git/objects/ba/478957201006fd5f17a192d9379961aa07079e": "0ef3de12da54214c9e25c51d28cf61b4",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/6082e0a0f96f0d0f8d0eba033bbb0685029a63": "9b736270bbecef4bc6fde78062f688f6",
".git/objects/bb/c39713d7ed5f9a46f48da8e5c14c42364b2f0b": "fc5cf5bdd28891dcd845f142c4541d25",
".git/objects/bf/5673c6ca66d9dcb6284c7f06d3e8709532e5b4": "f0f1e9d7a5be10ef5154d2fbceab62db",
".git/objects/c1/2aa80e074c226e9736cc1f4cabb9d611b08459": "af86103cdad73210d36d69237f192581",
".git/objects/c2/172b6369281e618a6aa52ed7cbba1fe09863c3": "884c071e85e57dd2c3890bef64fca21a",
".git/objects/c2/79b39b1e8f3bbe6a796652564a2dc6ae90e430": "f2313642a9063e82946237910b8f4820",
".git/objects/c3/505812e45bf2064ab9ff9ad2b576c01bb99f5a": "cbf2a79d5cd43dbe479ce09e251f664f",
".git/objects/c4/e2b6fede9913ac23f95e3c51de3a4da56b67a8": "27e27a32e576c297f842c9e919ea4fb7",
".git/objects/c6/062f6fe4388604aa4d8f770ef9ac7c37d6fd70": "9ee8e04a3bdfaf0f11f4085cb420871d",
".git/objects/c6/3d15ab025f39892f60dc36daef00167b1e79fe": "54e80782ddc77c0d4f8643af9c158239",
".git/objects/c6/d508093c95f92f508f48bfa5dba3c5380ca801": "0fed29ec678c23d8c08ebbbaf1e03096",
".git/objects/c7/1f2d83d9e77c146b48b838f50047a0dfbf3b99": "56ffb2fd4ce2fd9b93e5e56a00e2db67",
".git/objects/c8/d01d7b77590180181285af1da37ba3c8696f29": "d28e44e76b322c40fe50edb749e80f4a",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/7d3a998b982d5f4aac756b247c6ec7017cee87": "db107c6614483d3bf146829a675398de",
".git/objects/cb/c010ef2ac188490846d00b14d809df1ba98e93": "4abfe1379eb5c7615590045396c5a8e2",
".git/objects/cc/6ec5d25dcd0ce74126d6a2efb1b51a5d1202c6": "ec83d137e32057e0757b4239e8bf1400",
".git/objects/ce/41c4edbb2f0d8d8140dc9bf2155f6adc644c43": "3eeb36634121fd62738e03fe19ff35a0",
".git/objects/d0/2ac883182c8b903f04dbc73f78403b21389245": "e92e35c04f2401f3e84e26c52f7cadf4",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/373ea5b188fb82aaac19aa1c0587324e0acbd2": "b5c936bd567f098647660ac976bd5645",
".git/objects/d1/b2dcf2257643d1a4e0a4672d63477857f498ac": "3060d423acd27cd703d49fc62ffa8d34",
".git/objects/d1/b56fadeacc3a5d4e1be54832040ce9b8644a05": "342a6e25808794f381eeaec1cc3da70b",
".git/objects/d2/b4b93d38d7049f2e4372ae8f83c504126f4668": "ab022da23a6b73295809a25d7e044cc5",
".git/objects/d3/8ffa29808ec5366216b8d69c521d5ac81d5691": "43b273452458a5cca4e365a8a9631e78",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/0e984b4698ae87a60814950d804a30ed15bceb": "4edf8f545d8725d22592fbc2f00f0841",
".git/objects/d5/8d67c3b401b26e5b7133c843b19c564dbd3323": "5147ebf5ec62fb267e601a1bec3f8fed",
".git/objects/d5/d3f6bffa87126cd4f4f31f944908f1125be99a": "fc1f17f789efecb98acaaefba5650f22",
".git/objects/d6/d871d0e6be915b4ceb1c66f7b04fb53c2c027d": "2630231e7db79459f886e5625264c0aa",
".git/objects/d6/e0cc737286ab8f49f1ac729a2fd7c7f699f16b": "fffea4058f68423d5548e80c2f64ef7a",
".git/objects/d8/7b0d6b35b8ff537d7e3dd206a57a9bbd148819": "d9194636e4eae487b769a2cc57327320",
".git/objects/d8/c70266079d394f082cbc683fa688f098c6f20a": "b18dfdbf29b4bff044ff7342008cb1cf",
".git/objects/d8/ca576c6103b7ed7eaa00bd00f767666b5dc6f2": "0acf8f43f00af96c8b482bc222fd60e3",
".git/objects/da/0c0cf8c1e6e0f6e7c1e435ee9fef95e5f60c82": "1375990a2d28d3e9fe08c625f6c8a962",
".git/objects/da/fff7f5ecfe5e078830104b14ef7befb82ff37d": "cce044e3fc8adc9fbb8d919dc61b315e",
".git/objects/db/9380de403f7237aeac76cf6d7a7aaf531dd86d": "7ccf1a91813aa85e0a57d389a58c85b2",
".git/objects/db/a60653e790019111191ae68f54612c8fa4832f": "5d25478a92056993fc39d7ffb12211b0",
".git/objects/db/cdc8cc2882b25810c7197942242c267215f449": "65855c612c1d2df31d8a3eb7f780f20d",
".git/objects/dd/f56471ee138596cfa7e6df0e60c6b5bdd3968b": "732548b5d5dfdfa2d1f4fbea10289a80",
".git/objects/dd/ff2dabc367174d8ade985eb957ad4c6fa98637": "037a71c26af3681834a786cfcf53e5ec",
".git/objects/df/3314c6b0c2626f3720e261da918894cb153cc8": "60175db6be21056086bcfcc3074cda66",
".git/objects/e0/ad32a234e426bfd25538338f4105c64528705f": "562204313cf73e7b8aa9c07862a12684",
".git/objects/e1/56bb14da65af93cce857d137ac78988f798ab1": "96df55aecc077c5f80117e11f50a87b1",
".git/objects/e3/c0dc097b5a34d718ab3e1c6349daf602e383ee": "91d222f065c63289534e13430d0e0685",
".git/objects/e3/c5654da9186c0b0dc9be8c243bb100fa42bf50": "8c71240bfd8834167ea2a5d74d7b9522",
".git/objects/e4/20b7a841eb1bf4ec6b1f2b0c460788f79609ac": "91941814f1c6439a15ebc32e222820fd",
".git/objects/e4/ee0f2f9662089094f61395aff79f607d041655": "49ce193ba025c1e20c62184a788b8e4c",
".git/objects/e8/36475870da67f3c72f64777c6e0f37d9f4c87b": "63481d45f4fa7d8a6bc84a49687a47d7",
".git/objects/eb/63c0472c34e1fea8df3e33ac7a3f33d830d1a1": "e7bbacdbe5dc84459d875d9d476991c8",
".git/objects/eb/c361dd04fa5fbd539ccd991c5c5886dfbde614": "b84e3383feaf2b225dc54cdc94e66ace",
".git/objects/eb/cff6b1e26ea03b86b88caa6def526b5436ea39": "ab8e29bc77b8fe328f110978433f9326",
".git/objects/ec/7a6514b6016b58cdbd1b5df74ed38b9b917503": "506685dc39c8a0e1974e5fb26b3428a0",
".git/objects/ec/b23ba22e0cac53640caf747aa4a7b59b4208e9": "8595565bbbf13a21d5d56a37f64fc353",
".git/objects/ee/cb93f6528628a0c4baa3211ceee2adaaf05b7a": "a0a2af558c4c9f1d6c5d0babe91c9c74",
".git/objects/ee/d2b44a34b0033c683ce9593d73814d796aab6a": "f35ac98858f4e771ff9b9f678200b3ff",
".git/objects/ef/4d9cbd6ab1bf3a1bd86127433eab330a429699": "936a0bfce031e52cd291537f98c3b493",
".git/objects/f0/c10705d68c286fd6f2fb6e938ad4f52f048c4c": "becbb19328c2d68987fd4fcfb21a34de",
".git/objects/f1/7a9aa46c36efe688b623262bbbf2be297c5b9d": "6a842e350b3cfe1960863f69c9b1c3fd",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/38d8fcb6316645eac51ec47e5834503bc73530": "92b3c32c6ccb9ac1f2d280553edc3491",
".git/objects/f3/b33937d48c1e4a8e51a7004983fb9e3c2d2236": "329f60e4d28aa3814cfba5e4fa936397",
".git/objects/f4/bb44578fd5a1933f661f49f7cfd2d8edb6e0c1": "2338598a65edc3d5ea5ad2dd13b0b7c9",
".git/objects/f5/2dafe1ef330680478d83b7517036603648ef4d": "31478b954508e49f3b0f4280377e398f",
".git/objects/f6/d5cc0996015b97a89f024041014035c95c3cf9": "3605b41f6a4ff6e4f2ec0a05764ce24a",
".git/objects/f7/74485dcb689ccd3714b2f571ee9c8df4af8afc": "76dcde226fd3bec1407c778da001bde2",
".git/objects/f8/f03bfdc6a9ab22f4fece1af5adb5215799d736": "ad267f3dbe9be9e41b5a0e80b2dd6c6e",
".git/objects/f9/078a2c93a2f6b9faa51cff924a9dd0c998cce1": "68b6b7253c93a20a28e1b8e8a0dcd27f",
".git/objects/fa/5636b7e1bcd98a3122ebf82ae9f2660f65071b": "490bc414940a7ec1be3ce550f2412456",
".git/objects/fb/65f2c0e0b868e336307e4821a0952e280adfd2": "391789b96781f11670c4be3d7bf8557c",
".git/objects/fc/7952b87c5c8d9ba36aa7858a4b10f76be4cec7": "98b064d8fc2efe61648d4ae5ff7810b9",
".git/objects/fe/0d31966168444446ab0bc3b3f092b95884e2ff": "8bbe6e1e58225c884bec8a74445c6594",
".git/objects/fe/b923193313be2c33af92df86fc627fc96aa89c": "48d3914d107178d5a36ac94eb3d8b760",
".git/objects/ff/4c0ac39e30ad80cc973adf19001599d2708bd4": "553c7ca0178fed5b3441300ff9c6c1d3",
".git/objects/pack/pack-87edadd7b52c44125a9152a1db1ff72d3dcbac4a.idx": "3af2cf634b657b8638f7bfbe34fa1ffa",
".git/objects/pack/pack-87edadd7b52c44125a9152a1db1ff72d3dcbac4a.pack": "f3bcd5c6878325a293ed7da13ec20999",
".git/objects/pack/pack-87edadd7b52c44125a9152a1db1ff72d3dcbac4a.rev": "65aa2b7183d6ea7759756809369d3778",
".git/ORIG_HEAD": "3f2004172a91729d18ee3c36e9ee8d13",
".git/packed-refs": "1b2dae7696f3f367c68c3ca3daa6a042",
".git/refs/heads/main": "21f93705c330d0096e8ac02f35f77fdd",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "21f93705c330d0096e8ac02f35f77fdd",
"404.html": "289b8cb676040f8f69c4929015912532",
"assets/AssetManifest.bin": "bee03e3892c200abd53f74de058181a7",
"assets/AssetManifest.bin.json": "ddaa3588aff9b9df86985b4cd2572f76",
"assets/AssetManifest.json": "c5b7b5bbd35ff3d4364441279c348788",
"assets/assets/images/2.0x/flutter_logo.png": "4efb9624185aff46ca4bf5ab96496736",
"assets/assets/images/3.0x/flutter_logo.png": "b8ead818b15b6518ac627b53376b42f2",
"assets/assets/images/activitytype/activity_alphabet.png": "462bcfcdf768b5779891dee078bc9cb1",
"assets/assets/images/activitytype/activity_cards.png": "019cc54c26d0b5745992151f5145a142",
"assets/assets/images/activitytype/activity_carmode.png": "c146a39d0d3b3a77f4f22a98211712ff",
"assets/assets/images/activitytype/activity_conversation.png": "d1c428562a0f471ce7307b7163a29c59",
"assets/assets/images/activitytype/activity_flashcard.png": "b51c1fc055e9aee06272ce8cd47684ea",
"assets/assets/images/activitytype/activity_match.png": "71f20a291356681098d65510c7e4d0c0",
"assets/assets/images/activitytype/activity_quiz.png": "179c004d90452eaac2f20cb8f28c97a7",
"assets/assets/images/activitytype/activity_scenario.png": "bb97dce00ae68a166f396a586a57221e",
"assets/assets/images/activitytype/activity_tf.png": "7268a1d00ab5810b93fc6740638cfe81",
"assets/assets/images/activitytype/activity_typing.png": "5ca6ce8d357e2a3b5ae41165c4c41b36",
"assets/assets/images/activitytype/activity_voice.png": "a484254801ea49ba10cc58b0f3ba8e16",
"assets/assets/images/activitytype/activity_wheel.png": "318dd075e557ad4069659943f6648985",
"assets/assets/images/activitytype/cloud.png": "6e2f9e2a2548ea9d45c89ea58e6471ec",
"assets/assets/images/common/back.png": "2771c5da803e21dab2714492a0923bee",
"assets/assets/images/common/com_backl.png": "6e9b46b4aee380a6c585a74b2f656b20",
"assets/assets/images/common/com_back_look.png": "b421986d00ac29cc5f6702b900d088ed",
"assets/assets/images/common/com_change.png": "5da38df18318c43d680936afc75cb689",
"assets/assets/images/common/com_coming_soon.png": "94b533604e8fa869f131d0305cb8cefe",
"assets/assets/images/common/com_download.png": "a5e4219ed8ef2dac65b47bd480f735c0",
"assets/assets/images/common/com_fab_profile.png": "81486d0ebd85335f2762bc22eed5141a",
"assets/assets/images/common/com_info.png": "73fbf1da5e887cf12e31cdfac825923b",
"assets/assets/images/common/com_lang.png": "033de5a6bab4e00455e66177a5e6e94f",
"assets/assets/images/common/com_loading_splash.gif": "fdbd5bd071f2fff103d95716df2df709",
"assets/assets/images/common/com_lock.png": "cefce975c8fe5059a2e9d610c99a6044",
"assets/assets/images/common/com_microphone_use.png": "7ad167a3015749425811996186e2ebef",
"assets/assets/images/common/com_minus.png": "9b55ee42ccdcbbf44b45f6c99013b75e",
"assets/assets/images/common/com_music_off.png": "24265ab1668363267b532976245920f8",
"assets/assets/images/common/com_music_on.png": "6b6d078b4f284f0652bbb95831e82dcd",
"assets/assets/images/common/com_next_look.png": "2766562387b541a4e856053b277c687e",
"assets/assets/images/common/com_online.png": "81bc7943368bef68c20b1d1d4a3a96c9",
"assets/assets/images/common/com_plus.png": "4a1399feb9dced9612c043686ab4ebdd",
"assets/assets/images/common/com_popup.png": "861cf7085cbb4b7f7a98cffa053f56ae",
"assets/assets/images/common/com_sad_ghost_g.png": "7c4837d76c993627f171f5b112bb19ec",
"assets/assets/images/common/com_sad_ghost_v.png": "872316b7a2a02de44de0af4d1a8dce9d",
"assets/assets/images/common/com_settings.png": "7400bac3aedcf5f2c85769f49f5b9044",
"assets/assets/images/common/com_settings_fab.png": "acaf88b79405e8292b3b9a29d7ef2bf5",
"assets/assets/images/common/com_sound_off.png": "1e7b32d46f0e0f8da1633c5c6519504c",
"assets/assets/images/common/com_sound_on.png": "2254c007b61c0b4ccd76ed6b1505f2de",
"assets/assets/images/common/com_sound_play.png": "751b192b0abc2ddbaf97ba611d5b1d49",
"assets/assets/images/common/com_sound_violet.png": "d2f0677c6eed3df6f9b5db340977b9d9",
"assets/assets/images/common/com_target1.png": "1e476f3ecdcf8ac6da5180c4dd1340be",
"assets/assets/images/common/com_target2.png": "076c09edcd8b6440537b2eec5b10e17d",
"assets/assets/images/common/com_translator.png": "bda67bc6b4aeaaf2bcb80a99afce5fde",
"assets/assets/images/common/com_user.png": "9df79e5525992e5c08f0bc26572c8db1",
"assets/assets/images/common/com_vibro_off.png": "1a2048d3cf0801483e7701abf0c9a8bc",
"assets/assets/images/common/com_vibro_on.png": "2f5b26e85b35c5d1fd9e9d2301efdef9",
"assets/assets/images/common/com_volume.png": "9d16994555cf5dc2b595ca60e8c29902",
"assets/assets/images/common/com_wave_1.png": "32919ab196398be2b003908ae85d0e32",
"assets/assets/images/common/com_wave_2.png": "337a00bf765896a24869140467306783",
"assets/assets/images/common/nextlb.png": "96e01e9056064cf11969c6bc951479dd",
"assets/assets/images/common/nextlg.png": "7f2eb62608f85ee8150ef4bed3ff38a0",
"assets/assets/images/common/nextlv.png": "3e1c49b9bb1494284ddc0670fe6c0d1b",
"assets/assets/images/common/translate.png": "619afe3e90e0b5cf86842fcfdb14a1a8",
"assets/assets/images/flutter_logo.png": "478970b138ad955405d4efda115125bf",
"assets/assets/images/lang/lang_china.png": "e9fe6c1c483312862c03986a54db9141",
"assets/assets/images/lang/lang_russia.png": "7db6896f821849a7d2b394f7bd8887f9",
"assets/assets/images/lang/lang_usa.png": "bff9fa1e3c746ba0b61821903c8f3b22",
"assets/assets/images/lang/lang_vietnam.png": "b9c08520676d35dad64e5adc6bc0eb38",
"assets/assets/images/level/all_dict.png": "1584093e7773cad21a85fe9c5be0e021",
"assets/assets/images/level/level_0.jpg": "17787006ad4a11daa0ba19b47804dcb0",
"assets/assets/images/level/level_done.png": "bb693c85cc86ef5895a619149cf0e120",
"assets/assets/images/level/level_maths.jpg": "356c8b93cf3dbb83dc30ede4969d4b22",
"assets/assets/images/level/level_pre.png": "50edafdfd023b87c71a09a50ebdb4851",
"assets/assets/images/logo/me_eng_1.svg": "1d27b979370af37fdfc35ff83ab04856",
"assets/assets/images/logo/me_logo.png": "27a8e12cfc0674df2048d9ac5800b225",
"assets/assets/images/logo/me_logo_xl.png": "f236f5f1e9b46611de4d2bef0c20bd12",
"assets/assets/images/logo/me_logo_xxl.png": "b4bc8998bafb550387d0d253f760003a",
"assets/assets/images/logo/me_logo_xxxl.png": "ff7ed660c48ee994b3a0676766ca2b87",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "3f13d89979eebddc3eeabb4052c33c89",
"assets/NOTICES": "8bbdbfd656742c355ca33035e3837b4c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"CNAME": "27fc3723b62aba3a6e46fa1d93b42827",
"favicon.png": "003b9124a9a1efa940698711d62ac1f7",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "8c694ad6af4fe5ed7ab50786e4d478c3",
"icons/Icon-192.png": "4343f2ca9bfd1323253cd27cdfc5d0e0",
"icons/Icon-512.png": "0d2ac7d3837e2f4d23290add4494ab69",
"icons/Icon-maskable-192.png": "4343f2ca9bfd1323253cd27cdfc5d0e0",
"icons/Icon-maskable-512.png": "0d2ac7d3837e2f4d23290add4494ab69",
"img/me_eng_1.svg": "1d27b979370af37fdfc35ff83ab04856",
"img/me_logo.png": "27a8e12cfc0674df2048d9ac5800b225",
"img/me_logo_xl.png": "f236f5f1e9b46611de4d2bef0c20bd12",
"img/me_logo_xxl.png": "b4bc8998bafb550387d0d253f760003a",
"img/me_logo_xxxl.png": "ff7ed660c48ee994b3a0676766ca2b87",
"index.html": "c5375b5be809ee7c7e78de49397fbd34",
"/": "c5375b5be809ee7c7e78de49397fbd34",
"main.dart.js": "feb7b0c8df5c1a1ba9ddfad8d7c27ca3",
"manifest.json": "0be94ee7e3af1bbde846d46eb554dfe8",
"README.md": "b5d7eb3cb27cc0038c84949f43d9769e",
"version.json": "3a75fae0450174dc6e6c4bf65cc21005"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
