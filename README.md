# DTS REA4 Final Project

Ketentuan lengkap bisa dilihat di [Final Project Guidelines](https://docs.google.com/document/d/122KyWNQ4xxU4aFwWbM4vIfH7LM4AH2CZEZa3YsEHjCk).

## Daftar pair

Tugas dikerjakan secara berpasangan, untuk daftar kelompok bisa dilihat pada masing-masing Classroom atau Discord Class.

## Fork and Clone

Mohon perwakilan dari pair bisa melakukan fork repo ini dan clone, untuk repositori yang di fork menggunakan penamaan:

`dts4[a/b/c]-[nomor pair]-final`

Contoh: `dts4a-01-final`

## Branching, commit

Branch dapat sesuai dengan kebutuhan dan kesepakatan bersama dalam pair, namun hasil akhirnya harus di merge ke branch `main` dan di push ke Github. Pastikan hasil akhir kode sudah ter-push!

# DTS REA4B Pair 6 Final Project (News Web)

MSN adalah web berita international yang menampilkan berita-berita terbaru dari berbagai negara

## Menu Utama

1. Home
2. News
3. Portal
4. Side Bar

### Home

- Menampilkan halaman default ketika web pertama kali di akses.
- Halaman ini tidak memerlukan akses login user.
- Halaman ini menampilkan list Hot Topics dalam bentuk list.
- Pada halaman ini dapat menuju ke halaman Detail News sesuai dengan berita yang dipilih

### News

- Menampilkan 2 jenis berita yaitu Hot Topics dan Latest News
- Halaman ini tidak memerlukan akses login user
- Berita Hot Topics adalah berita peringkat 1 (data pertama) di API khusus HotTopics
- Berita Latest News adalah berita 5 berita terbaru yang diambil dari API News (by default hanya bisa limit 5 per hit API)
- Pada halaman ini dapat menuju ke halaman Detail News sesuai dengan berita yang dipilih

### Portal

- Menampilkan berita sesuai dengan Category yang dipilih
- Halaman ini tidak memerlukan akses login user
- Berita yang muncul adalah berita Latest News sesuai dengan Category yang dipilih
- Pada halaman ini dapat menuju ke halaman Detail News sesuai dengan berita yang dipilih

### Side Bar

- Menampilkan beberapa informasi dan action ketika icon menu di klik
- Jika user belum Log-In, maka yang tampil hanya button Sign In dan Sign Up
- Jika user sudah Log-In, maka yang tampil yaitu ava user beserta email user, menu Favorite (Upcoming Features), dan button Log-Out

## Fitur Unik

1. News by Category (Filter)
2. Button Direct to News Source
3. User Profile

### 1. News by Category (Filter)

- Menampilkan list news berdasarkan category yang dipilih.
- Terdapat 10 category yaitu general, science, sports, business, health, entertainment, tech, politics, food, travel

### 2. Button Direct to News Source

- Fitur ini berada pada halaman detail yang berguna untuk me-riderect user ke halaman sumber berita sesuai dengan berita yang dipilih.

### 3. User Profile

- Fitur ini menampilkan informasi user login beruba email user tersebut didalam side bar.
- Fitur ini hanya akan muncul jika user sudah login
