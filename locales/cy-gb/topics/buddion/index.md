# Buddion

Buddion arfaethedig fesul grŵp defnyddwyr.

Amcanion dylunio yw’r rhain, nid canlyniadau a fesurwyd. Nid yw’r feddalwedd wedi’i defnyddio’n glinigol. Gweler y [dudalen statws](@/statws/) am yr hyn sy’n bodoli heddiw.

## Cleifion

### Log mynediad

Mae’r dyluniad yn cynnwys log sy’n dangos pa rolau a sefydliadau a agorodd gofnod.

### Gorfodi cydsyniad

Mae’r gwasanaeth yn gwirio cydsyniad ar bob darlleniad, yn hytrach na dibynnu ar y rhyngwyneb defnyddiwr.

### Ceisiadau am ddiwygiad

Gall claf ofyn am newid. Caiff y cofnod gwreiddiol ei gadw wrth ei ochr.

## Clinigwyr

### Cofnod seiliedig ar lwybr

Caiff y cofnod ei drefnu yn ôl llwybr gofal, felly nid yw rhyddhau o un tîm yn cau gofal y claf.

### Mynediad brys

Mae torri’r gwydr yn rhoi pedair awr o fynediad darllen i glinigydd sy’n trin. Mae angen rheswm, a chaiff y mynediad ei adolygu wedyn.

### Gwelededd data coll

Caiff data coll ei ddangos fel anhysbys, gyda rheswm, ac nid fel "dim" neu "normal".

## Sefydliadau

### Trwyddedu a chludadwyedd

Mae pum trwydded agored ar gael. Defnyddir FHIR R4 fel y model data a’r API.

### Log peryglon cyhoeddedig

Mae’r log peryglon yn gyhoeddus. Dim ond Swyddog Diogelwch Clinigol all gau perygl.

### Hanes newidiadau cyhoeddedig

Mae pob cofnod yn y log newidiadau cyhoeddus yn nodi beth na wnaed neu na wiriwyd.

## Datblygwyr

### Datblygu dan arweiniad manyleb

Un ymrwymiad yw newid ymddygiad, gyda golygiad i’r fanyleb, y cod a’r prawf.

### Profion cyfrifiad

Mae profion awtomataidd yn methu pan ychwanegir llwybr, colofn neu ganiatâd heb gyfrif amdano.

### Pentwr technoleg

Rust a loco.rs, PostgreSQL 18, SvelteKit a Svelte 5, Lily Design System.

## Defnydd rhyngwladol

Cedwir rheolau cenedlaethol mewn pecynnau, nid yn y craidd. Mae gan ryngwyneb y clinigwyr 10 locale, sydd wedi’u hysgrifennu gan beiriant nes bydd siaradwyr yn eu hadolygu.
