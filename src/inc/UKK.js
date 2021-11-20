import './UKK.css';
import React from 'react';
import Collapsible from 'react-collapsible';

//UKK-sivu
export default function UKK() {
    return (
        <div>
            <h3>Usein kysytyt kysymykset</h3>
                <Collapsible trigger="Mitä maksutapoja Visual hyväksyy?">
                    <p>
                    Visual hyväksyy maksutapoina suomalaiset verkkopankit, MasterCardin sekä Visan.
                    </p>
                </Collapsible>
                <Collapsible trigger="Onko maksuni tullut perille?">
                    <p>
                    Tarkista verkkopankistasi, onko maksu lähtenyt tililtäsi.
                    </p>
                    <p>
                    Jos verkkopankin maksutiedoissa on epäselvyyttä, voit olla yhteydessä Visualiin puhelimitse.
                    </p>
                </Collapsible>
                <Collapsible trigger="En ole saanut tilausvahvistusta. Mitä teen?">
                    <p>
                    Tarkista sähköpostisi roskapostikansio.
                    </p>
                    <p>
                    Jos tilausvahvistus ei ole roskapostikansiossa, ota yhteyttä Visualiin puhelimitse.
                    </p>
                </Collapsible>
                <Collapsible trigger="Kauanko toimituksessa kestää?">
                    <p>
                    Tuotteet toimitetaan yleensä noin 3 - 5 arkipäivän kuluessa.
                    </p>
                </Collapsible>
        </div>
    )
}