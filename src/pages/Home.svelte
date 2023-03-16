<script>
    import { onMount} from 'svelte'
    import DonasikuList from "../components/DonasikuList.svelte";
    import Header from "../components/Header.svelte";
    import Welcome from "../components/Welcome.svelte";
    import Promo from "../components/Promo.svelte";
    import Footer from "../components/Footer.svelte";
    
    let title  = "Donasi";
    let donasiku = [];

    onMount(async function() {
        const res =  await fetch(`/api/donasiku`);
        donasiku = await res.json();
    })
</script>

<Header />
<Welcome />
<DonasikuList {donasiku} />
<Promo />
<Footer />
