<script>
    import DonasikuList from "../components/DonasikuList.svelte";
    import Header from "../components/Header.svelte";
    import Welcome from "../components/Welcome.svelte";
    import Promo from "../components/Promo.svelte";
    import Footer from "../components/Footer.svelte";
    import { donasiku } from "../data/donasiku.js";

    let tittle  = "Donasi";
</script>

<Header />
<Welcome />
<DonasikuList {donasiku} />
<Promo />
<Footer />
