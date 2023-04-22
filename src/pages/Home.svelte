<script>
    import DonasikuList from "../components/DonasikuList.svelte";
    import Header from "../components/Header.svelte";
    import Welcome from "../components/Welcome.svelte";
    import Promo from "../components/Promo.svelte";
    import Footer from "../components/Footer.svelte";
    import Loader from "../components/Loader.svelte";
    
    let title = "Donasi";
    let data = getData();

    async function getData() {
        const res = await fetch('https://bwacharity.fly.dev/charities');
        const data = await res.json();

        if(res.ok) {
            return data;
        } else {
            throw new Error(data);
        }
    }
</script>

<Header />
<Welcome />
{#await data}
<Loader />
{:then donasiku}
    <DonasikuList {donasiku} />
{/await}
<Promo />
<Footer />
