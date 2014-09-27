define(function() {

    var handlePoly = [[{x:0.37457653347220043,y:-0.218491714839529},{x:0.4751182896723265,y:-0.23176319501624096},{x:0.5103078204439114,y:-0.21185597475117293},{x:0.5002535489399453,y:0.512546389867466},{x:0.30671106976875756,y:0.512546389867466},{x:0.3041974719290306,y:-0.19416066784889027}],[{x:0.4751182896723265,y:-0.23176319501624096},{x:0.37457653347220043,y:-0.218491714839529},{x:0.37457653347220043,y:-0.38880925471869743},{x:0.4751182896723265,y:-0.41535221507212133}],[{x:0.4751182896723265,y:-0.41535221507212133},{x:0.37457653347220043,y:-0.38880925471869743},{x:0.21873706305738258,y:-0.4197760417976921},{x:0.2438725620348851,y:-0.49276923550578255}],[{x:0.2438725620348851,y:-0.49276923550578255},{x:0.21873706305738258,y:-0.4197760417976921},{x:-0.4297562576519199,y:-0.42198790242430306},{x:-0.4297562576519199,y:-0.49276923550578255}]];

    var LBarPoly = [[{x:0.42750000953674316, y:0.19000000411813905},{x:0.4975000023841858, y:0.48795462575825777},{x:0.4025000333786011, y:0.5138636919585141},{x:0.3475000262260437, y:0.49227270050482314},{x:0.36000001430511475, y:0.280681787295775}],[{x:0.4975000023841858, y:0.48795462575825777},{x:0.42750000953674316, y:0.19000000411813905},{x:0.4249999523162842, y:-0.2331818222999573},{x:0.48499995470046997, y:-0.22886364459991457}],[{x:0.48499995470046997, y:-0.22886364459991457},{x:0.4249999523162842, y:-0.2331818222999573},{x:0.37749993801116943, y:-0.3540909008546309},{x:0.3999999165534973, y:-0.4620455492626537},{x:0.45749998092651367, y:-0.3713636116548018}],[{x:0.3999999165534973, y:-0.4620455492626537},{x:0.37749993801116943, y:-0.3540909008546309},{x:0.32249999046325684, y:-0.3929546031084928},{x:0.32249999046325684, y:-0.4965909708629955}],[{x:0.32249999046325684, y:-0.4965909708629955},{x:0.32249999046325684, y:-0.3929546031084928},{x:-0.4949999451637268, y:-0.3886363224549727},{x:-0.497499942779541, y:-0.4965909708629955}]];

    /*
    var upperLegPoly = [[{x:-0.15148273910430662,y:-0.35006059233347575},{x:-0.4863150215324234,y:-0.3212727409998576},{x:-0.4064170783853786,y:-0.46866669082641604},{x:-0.2870321049409754,y:-0.494}],[{x:-0.4863150215324234,y:-0.3212727409998576},{x:0.49532081685601714,y:0.21533333635330199},{x:0.39117647058823535,y:0.3408485191663106},{x:0.18334955467897304,y:0.4272121486663818},{x:-0.4013368693265048,y:0.4370000936190287},{x:-0.4863150215324234,y:0.19690911149978635}],[{x:0.49532081685601714,y:0.21533333635330199},{x:-0.4863150215324234,y:-0.3212727409998576},{x:-0.15148273910430662,y:-0.35006059233347575},{x:0.18334955467897304,y:-0.3212727409998576},{x:0.4292780990906578,y:-0.18999998792012535},{x:0.5004010259148909,y:-0.031666654586792006}]];
    */

    var upperLegPoly = [[{x:-0.46554951879439904,y:-0.4034609776280226},{x:0.3676561924370313,y:0.23521095315368565},{x:0.29648141652195453,y:0.3903323465008395},{x:-0.4152662727852862,y:0.4385921540261474},{x:-0.4881769921091367,y:0.30070650797050213},{x:-0.5194244604316547,y:-0.08252021534985424}],[{x:0.3676561924370313,y:0.23521095315368565},{x:-0.46554951879439904,y:-0.4034609776280226},{x:-0.3937162697450514,y:-0.510441211174184},{x:0.27074131403293217,y:-0.43912107602330447},{x:0.49611799522680605,y:-0.35769727201029705},{x:0.5169496187873744,y:-0.2887544562058749}]];

    /*
    var lowerLegPoly = [[{x:0.1626126411798838,y:0.08777184006960495},{x:0.3519586775753949,y:0.3074621279602465},{x:-0.0496396229073808,y:0.5042573809623718},{x:-0.38513510452734456,y:0.48704719089943427},{x:-0.48099099139909485,y:0.3803442710119745},{x:-0.5083783832756249,y:0.20480077551758807},{x:-0.4347747580425159,y:0.04646747008613918},{x:-0.18486487221073458,y:0.043025444383206574}],[{x:0.3519586775753949,y:0.3074621279602465},{x:0.1626126411798838,y:0.08777184006960495},{x:0.3423422607215675,y:0.015489238759745722}],[{x:0.50153154295844,y:0.09809785563012828},{x:0.3423422607215675,y:0.015489238759745722},{x:0.43477472743472534,y:-0.5008152321628903},{x:0.4844143809498967,y:-0.5008152321628903}],[{x:0.3423422607215675,y:0.015489238759745722},{x:0.50153154295844,y:0.09809785563012828},{x:0.5135135135135135,y:0.30806166970211524},{x:0.46558563129321945,y:0.3837863582631816},{x:0.3519586775753949,y:0.3074621279602465}]];
    */

    var lowerLegPoly = [[{x:0.14577767798190552,y:-0.3177695842850882},{x:0.08120459576814279,y:0.37277966268235474},{x:-0.306234657158431,y:0.4461505330150295},{x:-0.4591711965699428,y:0.3770955911951066},{x:-0.5084507649968719,y:0.24330168189060333},{x:-0.5084507042253521,y:-0.458293018532874}],[{x:0.08120459576814279,y:0.37277966268235474},{x:0.14577767798190552,y:-0.3177695842850882},{x:0.4788396992707251,y:-0.30913780443447386},{x:0.5043290978175472,y:-0.21418729997904323},{x:0.49923115733666296,y:0.16129896297342838}]];

    var waistPoly = [[{x:-0.47244119999999995,y:0.017727288858413702},{x:-0.43744117377395625,y:-0.448008057220459},{x:0.37255870940094005,y:-0.448008057220459},{x:0.500058766621399,y:-0.2605079976158141},{x:0.4875587189376832,y:0.166992011920929},{x:0.37755882384185796,y:0.38699204053115843},{x:-0.1749411856948852,y:0.42449197496604923},{x:-0.3842059036910056,y:0.25302142228317265}]];

    var chestPoly = [[{x:-0.44922009905510013,y:-0.21377399900243232},{x:0.47009097413793083,y:0.5036986549149642},{x:-0.24878146804201248,y:0.5105354780363007},{x:-0.33926895273817254,y:0.4267843132985683},{x:-0.475,y:0.06671134365341817}],[{x:0.47009097413793083,y:0.5036986549149642},{x:-0.44922009905510013,y:-0.21377399900243232},{x:-0.2945406915129675,y:-0.49425930090760256},{x:0.12322244260923948,y:-0.4449115311867994},{x:0.42729652745329444,y:-0.10859197003731327},{x:0.5153346565585398,y:0.08494279047562173}]];

    return {
        LBar: LBarPoly,
        handlebars: handlePoly,
        waist: waistPoly,
        chest: chestPoly,
        upperLeg: upperLegPoly,
        lowerLeg: lowerLegPoly
    }

});


