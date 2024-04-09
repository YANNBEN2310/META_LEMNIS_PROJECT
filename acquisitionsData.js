const acquisitionsData = [
    {date: '23 août 2005', company: 'facebook.com', activity: 'AboutFace'},
    {date: '19 juillet 2007', company: 'Parakey', activity: "Système d'exploitation en ligne"},
    {date: '23 juin 2008', company: 'ConnectU', activity: 'Réseautage social'},
    {date: '10 septembre 2009', company: 'FriendFeed', activity: 'Agrégateur\xa0de\xa0réseaux sociaux'},
    {date: '19 février 2010', company: 'Octazen', activity: 'Importation de contacts'},
    {date: '2 mars 2010', company: 'Divvyshot', activity: 'Gestion de photos'},
    {date: '13 mai 2010', company: 'Friendster patents', activity: 'Propriété intellectuelle'},
    {date: '26 mai 2010', company: 'ShareGrove', activity: 'Conversation privées et forums'},
    {date: '8 juillet 2010', company: 'Nextstop', activity: 'Recommandation de voyages'},
    {date: '15 août 2010', company: 'Chai Labs', activity: 'Applications en lignes'},
    {date: '20 août 2010', company: 'Hot Potato', activity: 'Check-in et statuts'},
    {date: '29 octobre 2010', company: 'Drop.io', activity: 'Hébergement et partage de fichiers'},
    {date: '15 novembre 2010', company: 'Nom de domaine fb.com', activity: "Racheté auprès de l'American Farm Bureau Federation"},
    {date: '25 janvier 2011', company: 'Rel8tion', activity: 'Publicité en ligne'},
    {date: '2 mars 2011', company: 'Beluga', activity: 'Messagerie de groupe'},
    {date: '20 mars 2011', company: 'Snaptu', activity: "Développement d'applications mobiles"},
    {date: '9 juin 2011', company: 'Sofa', activity: 'Design logiciel'},
    {date: '9 juin 2011', company: 'MailRank', activity: "Gestion d'email"},
    {date: '2 août 2011', company: 'Push Pop Press', activity: 'Publication en ligne'},
    {date: '10 octobre 2011', company: 'Friend.ly', activity: 'Service de questions-réponses'},
    {date: '8 novembre 2011', company: 'Strobe', activity: 'Applications mobiles en html5'},
    {date: '2 décembre 2011', company: 'Gowalla', activity: ''},
    {date: '9 avril 2012', company: 'Instagram', activity: 'Partage de photos et vidéos'},
    {date: '18 juin 2012', company: 'Face.com', activity: ''},
    {date: '14 juillet 2012', company: 'Spool', activity: ''},
    {date: '20 juillet 2012', company: 'Acrylic Software', activity: ''},
    {date: '24 août 2012', company: 'Threadsy', activity: ''},
    {date: '28 février 2013', company: 'Atlas', activity: ''},
    {date: 'mars 2013', company: 'Osmeta', activity: ''},
    {date: '14 mars 2013', company: 'Hot Studio', activity: ''},
    {date: '23 avril 2013', company: 'Spaceport', activity: ''},
    {date: '25 avril 2013', company: 'Parse', activity: ''},
    {date: '18 juillet 2013', company: 'Monoidics', activity: ''},
    {date: '12 août 2013', company: 'Jibbigo', activity: ''},
    {date: '13 octobre 2013', company: 'Onavo', activity: 'VPN'},
    {date: '17 décembre 2013', company: 'SportStream', activity: ''},
    {date: '8 janvier 2014', company: 'Little Eye Labs', activity: ''},
    {date: '13 janvier 2014', company: 'Branch', activity: 'Plateforme de commentaires et discussions'},
    {date: '19 février 2014', company: 'WhatsApp', activity: 'Messagerie instantanée'},
    {date: '26 février 2014', company: 'Oculus VR', activity: 'Réalité virtuelle'},
    {date: '24 avril 2014', company: 'Moves', activity: "Application de fitness et de tracking d'activité"},
    {date: '3 juin 2014', company: 'Pryte', activity: 'Connexion à la demande'},
    {date: '2 juillet 2014', company: 'LiveRail', activity: 'Start-up de pubs vidéos'},
    {date: '5 janvier 2015', company: 'Wit.ai', activity: 'Applications de reconnaissance vocale'},
    {date: '8 janvier 2015', company: 'Quickfire Networks', activity: 'Video Compression'},
    {date: '14 mars 2015', company: 'TheFind, Inc.', activity: 'Ecommerce'},
    {date: '26 mai 2015', company: 'Surreal Vision', activity: 'Réalité augmentée'},
    {date: '18 mai 2020', company: 'Giphy', activity: 'Librairie de Gifs'},
    {date: '18 juin 2020', company: 'Mapillary', activity: 'Logiciel en ligne de partage de photos géolocalisées'},
    {date: '22 juin 2020', company: 'Ready at Dawn', activity: 'studio américain de développement de jeux vidéo'},
    {date: '18 septembre 2020', company: 'Lemnis Technologies', activity: 'technologie compagnie'},
    {date: '30 novembre 2020', company: 'kustomer', activity: 'platforme CRM'},
    {date: '30 avril 2021', company: 'Downpour Interactive', activity: 'Développeur de jeux vidéo'},
    {date: '4 juin 2021', company: 'Unit 2 Games', activity: 'Développeur de logiciels'},
    {date: '11 octobre 2021', company: 'BigBox VR', activity: 'Studio de développement de jeu vidéo'},
    {date: '29 octobre 2021', company: 'AI.Reverie', activity: 'I.A developement'},
    {date: '1 novembre 2021', company: 'Within', activity: "développeur de l'application de fitness"},
    {date: '8 avril 2022', company: 'Presize', activity: "production et l'ingénierie de composants mécaniques"},
    {date: 'septembre 2022', company: 'Lofelt', activity: 'Développeur de logiciels'},
    {date: '11 octobre 2022', company: 'Armature Studio', activity: 'studio de développement de jeux vidéo'},
    {date: '11 octobre 2022', company: 'Camouflaj', activity: 'Développeur de jeux vidéo'}
];

document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('acquisitionChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar', // Change to 'line', 'bar', etc., based on your preference
        data: {
            labels: acquisitionsData.map(item => item.date), // Use dates as labels
            datasets: [{
                label: 'Acquisitions',
                data: acquisitionsData.map((item, index) => index + 1), // Simple representation
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});