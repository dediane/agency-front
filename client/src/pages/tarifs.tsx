import { PricingCard } from "@/components/pricingcard";
import React from "react";

export default function Home() {
    return <div>
        Tarifs
        <PricingCard title="Site vitrine" content="Votre site internet pour mettre en avant votre activité sur le web et booster vos revenus" color="color1"/>
        <PricingCard title="Site vitrine" content="Votre site internet pour mettre en avant votre activité sur le web et booster vos revenus" color="color2"/>
        <PricingCard title="Site vitrine" content="Votre site internet pour mettre en avant votre activité sur le web et booster vos revenus" color="color3"/>

    </div>;
}