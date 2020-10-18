 function showNotifikasiSederhana() {
     const title = 'Notifikasi Sederhana';
     const options = {
         'body': 'Ini adalah konten notifikasi. \nBisa menggunakan baris baru.',
         requireInteraction: true,
     }
     if (Notification.permission === 'granted') {
         navigator.serviceWorker.ready.then(function(registration) {
             registration.showNotification(title, options);
         });
     } else {
         console.error('FItur notifikasi tidak diijinkan.');
     }
 }

 function showNotifikasiIkon() {
     const title = 'Notifikasi Sederhana';
     const options = {
         'body': 'Ini adalah konten notifikasi dengan gambar ikon.',
         'icon': '/img/icon1.png'
     };
     if (Notification.permission === 'granted') {
         navigator.serviceWorker.ready.then(function(registration) {
             registration.showNotification(title, options);
         });
     } else {
         console.error('Fitur notifikasi tidak diijinkan.');
     }

 }

 function showNotifikasiBadge() {
     const title = 'Notifikasi dengan Badge';
     const options = {
         'body': 'Ini adalah konten notifikasi dengan gambar badge.',
         'badge': '/img/icon1.png'
     };
     if (Notification.permission === 'granted') {
         navigator.serviceWorker.ready.then(function(registration) {
             registration.showNotification(title, options);
         });
     } else {
         console.error('Fitur notifikasi tidak diijinkan.');
     }
 }

 function showNotifikasiActions() {
     const title = 'Notifikasi dengan Actions';
     const options = {
         'body': 'Ini adalah konten notifikasi dengan pilihan actions.',
         'actions': [{
             'action': 'yes-action',
             'title': 'Ya',
         }, {
             'action': 'no-action',
             'title': 'Tidak',
         }]
     };
     if (Notification.permission === 'granted') {
         navigator.serviceWorker.ready.then(function(registration) {
             registration.showNotification(title, options);
         });
     } else {
         console.error('Fitur notifikasi tidak diijinkan.');
     }
 }

 function showNotifikasiTag() {
     const title1 = 'Notifikasi dengan Tag - 1';
     const options1 = {
         body: 'Anggota tag 1',
         tag: 'message-group-1'
     };
     // notifikasi kedua
     const title2 = 'Notifikasi dengan Tag - 2';
     const options2 = {
         body: 'Anggota tag 2',
         tag: 'message-group-2'
     };
     // notifikasi ketiga
     const title3 = 'Notifikasi dengan Tag - 3';
     const options3 = {
         body: 'Anggota tag 1',
         tag: 'message-group-1'
     };
     if (Notification.permission === 'granted') {
         navigator.serviceWorker.ready.then(function(registration) {
             registration.showNotification(title1, options1);
             registration.showNotification(title2, options2);
             registration.showNotification(title3, options3);
         });
     } else {
         console.error('Fitur notifikasi tidak diijinkan.');
     }
 }

 function showNotifikasiRenotify() {
     const title = 'Notifikasi dengan Renotify';
     const options = {
         body: 'Renotify',
         tag: 'message-group-1',
         renotify: true,
     };
     if (Notification.permission === 'granted') {
         navigator.serviceWorker.ready.then(function(registration) {
             registration.showNotification(title, options);
         });
     } else {
         console.error('Fitur notifikasi tidak diijinkan.');
     }
 }

 function showNotifikasiSilent() {
     const title = 'Notifikasi senyap';
     const options = {
         silent: true
     };
     if (Notification.permission === 'granted') {
         navigator.serviceWorker.ready.then(function(registration) {
             registration.showNotification(title, options);
         });
     } else {
         console.error('Fitur notifikasi tidak diijinkan.');
     }
 }


 function showNotifikasiGambar() {
     const title = 'Notifikasi dengan Gambar';
     const options = {
         'body': 'Ini adalah konten notifikasi dengan gambar latar.',
         'image': '/img/icon1.png'
     };
     if (Notification.permission === 'granted') {
         navigator.serviceWorker.ready.then(function(registration) {
             registration.showNotification(title, options);
         });
     } else {
         console.error('Fitur notifikasi tidak diijinkan.');
     }
 }