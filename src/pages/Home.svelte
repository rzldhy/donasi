<script>
    import DonasiList from "../components/DonasiList.svelte";
    import Header from "../components/Header.svelte";
    import Welcome from "../components/Welcome.svelte";
    import Promo from "../components/Promo.svelte";
    import Footer from "../components/Footer.svelte";
    import { donasi } from "../data/donasi.js";

    let tittle  = "Donasi";
</script>

<Header />
<Welcome />
<DonasiList {donasi} />
<Promo />
<Footer />
