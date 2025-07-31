document.addEventListener('DOMContentLoaded', () => {
  const boton = document.getElementById('btnGenerarPDF');

  boton.addEventListener('click', async () => {
    try {
      const { PDFDocument, rgb, StandardFonts } = PDFLib;

      const pdfDoc = await PDFDocument.create();

      const placa = document.getElementById('placa').value;
      const empresa = document.getElementById('empresa').value;
      const conductor = document.getElementById('conductor').value;
      const fecha_ingreso = document.getElementById('fecha_ingreso').value;
      const hora_ingreso = document.getElementById('hora_ingreso').value;
      const fecha_Salida = document.getElementById('fecha_salida').value;
      const kilometraje = document.getElementById('kilometraje').value;
      
      //Elementos//

      const botiquin_si = document.getElementById("botiquin_si").checked;
      const botiquin_no = document.getElementById("botiquin_no").checked;
      const c_botiquin = document.getElementById("comentario_botiquin").value;
      
      const extintor_si = document.getElementById("extintor_si").checked;
      const extintor_no = document.getElementById("extintor_no").checked;
      const c_extintor = document.getElementById("comentario_extintor").value;

      const conos_si = document.getElementById("conos_si").checked;
      const conos_no = document.getElementById("conos_no").checked;
      const c_conos = document.getElementById("comentario_conos").value;
      const can_conos= document.getElementById("cantidad_conos").value

      const tacos_si = document.getElementById("tacos_si").checked;
      const tacos_no = document.getElementById("tacos_no").checked;
      const c_tacos = document.getElementById("comentario_tacos").value;
      const can_tacos= document.getElementById("cantidad_tacos").value

      const triangulo_si = document.getElementById("triangulos_si").checked;
      const triangulo_no = document.getElementById("triangulos_no").checked;
      const c_triangulo = document.getElementById("comentario_triangulos").value;
      const can_triangu= document.getElementById("cantidad_triangulos").value

      const remolque_si = document.getElementById("cable_remolque_si").checked;
      const remolque_no = document.getElementById("cable_remolque_no").checked;
      const c_remolque = document.getElementById("comentario_cableremo").value;

      const pase_si = document.getElementById("cablePaen_si").checked;
      const pase_no = document.getElementById("cablePaen_no").checked;
      const c_pase = document.getElementById("comentario_PaEn").value;

      const eslinga_si = document.getElementById("eslinga_si").checked;
      const eslinga_no = document.getElementById("eslinga_no").checked;
      const c_eslinga = document.getElementById("comentario_eslinga").value;

      const linterna_si = document.getElementById("linterna_si").checked;
      const linterna_no = document.getElementById("linterna_no").checked;
      const c_linterna = document.getElementById("comentario_linterna").value;

      const herramientas_si = document.getElementById("herramientas_si").checked;
      const herramientas_no = document.getElementById("herramientas_no").checked;
      const c_herramientas = document.getElementById("comentario_herramientas").value;

      const antiderrames_si = document.getElementById("anti_si").checked;
      const antiderrames_no = document.getElementById("anti_no").checked;
      const c_antiderrames = document.getElementById("comentario_antiderrames").value;

      const martillo_si = document.getElementById("martillo_si").checked;
      const martillo_no = document.getElementById("martillo_no").checked;
      const c_martillo = document.getElementById("comentario_martillo").value;

      const circulina_si = document.getElementById("circulina_si").checked;
      const circulina_no = document.getElementById("circulina_no").checked;
      const c_circulina = document.getElementById("comentario_circulina").value;

      const cinta_si = document.getElementById("cinta_si").checked;
      const cinta_no = document.getElementById("cinta_no").checked;
      const c_cinta = document.getElementById("comentario_cinta").value;

      const cinturon_si = document.getElementById("cinturon_si").checked;
      const cinturon_no = document.getElementById("cinturon_no").checked;
      const c_cinturon = document.getElementById("comentario_cinturon").value;

      const pertiga_si = document.getElementById("pertiga_si").checked;
      const pertiga_no = document.getElementById("pertiga_no").checked;
      const c_pertiga = document.getElementById("comentario_pertiga").value;

      const camara_si = document.getElementById("camara_si").checked;
      const camara_no = document.getElementById("camara_no").checked;
      const c_camara = document.getElementById("comentario_camara").value;

      const sirena_si = document.getElementById("sirena_si").checked;
      const sirena_no = document.getElementById("sirena_no").checked;
      const c_sirena = document.getElementById("comentario_sirena").value;
      //
      //Dispositivos de Seguridad//
      //
      const luces_delanteras_si = document.getElementById("luces_delanteras_si").checked;
      const luces_delanteras_no = document.getElementById("luces_delanteras_no").checked;
      const c_luces_delanteras = document.getElementById("comentario_luces_delanteras").value;

      const neblineros_si = document.getElementById("neblineros_si").checked;
      const neblineros_no = document.getElementById("neblineros_no").checked;
      const c_neblineros = document.getElementById("comentario_neblineros").value;

      const direccionales_si = document.getElementById("direccionales_si").checked;
      const direccionales_no = document.getElementById("direccionales_no").checked;
      const c_direccionales = document.getElementById("comentario_direccionales").value;

      const luces_salon_si = document.getElementById("luces_salon_si").checked;
      const luces_salon_no = document.getElementById("luces_salon_no").checked;
      const c_luces_salon = document.getElementById("comentario_luces_salon").value;

      const luces_emergencia_si = document.getElementById("luces_emergencia_si").checked;
      const luces_emergencia_no = document.getElementById("luces_emergencia_no").checked;
      const c_luces_emergencia = document.getElementById("comentario_luces_emergencia").value;

      const claxon_si = document.getElementById("claxon_si").checked;
      const claxon_no = document.getElementById("claxon_no").checked;
      const c_claxon = document.getElementById("comentario_claxon").value;

      const luces_freno_si = document.getElementById("luces_freno_si").checked;
      const luces_freno_no = document.getElementById("luces_freno_no").checked;
      const c_luces_freno = document.getElementById("comentario_luces_freno").value;

      const luces_posteriores_si = document.getElementById("luces_posteriores_si").checked;
      const luces_posteriores_no = document.getElementById("luces_posteriores_no").checked;
      const c_luces_posteriores = document.getElementById("comentario_luces_posteriores").value;

      const faro_pirata_si = document.getElementById("faro_pirata_si").checked;
      const faro_pirata_no = document.getElementById("faro_pirata_no").checked;
      const c_faro_pirata = document.getElementById("comentario_faro_pirata").value;

      const alarma_retroceso_si = document.getElementById("alarma_retroceso_si").checked;
      const alarma_retroceso_no = document.getElementById("alarma_retroceso_no").checked;
      const c_alarma_retroceso = document.getElementById("comentario_alarma_retroceso").value;

      const limpia_parabrisas_si = document.getElementById("limpia_parabrisas_si").checked;
      const limpia_parabrisas_no = document.getElementById("limpia_parabrisas_no").checked;
      const c_limpia_parabrisas = document.getElementById("comentario_limpia_parabrisas").value;

      const espejos_retrovisores_si = document.getElementById("espejos_retrovisores_si").checked;
      const espejos_retrovisores_no = document.getElementById("espejos_retrovisores_no").checked;
      const c_espejos_retrovisores = document.getElementById("comentario_espejos_retrovisores").value;

      const ventanas_laterales_si = document.getElementById("ventanas_laterales_si").checked;
      const ventanas_laterales_no = document.getElementById("ventanas_laterales_no").checked;
      const c_ventanas_laterales = document.getElementById("comentario_ventanas_laterales").value;

      const testigos_panel_si = document.getElementById("testigos_panel_si").checked;
      const testigos_panel_no = document.getElementById("testigos_panel_no").checked;
      const c_testigos_panel = document.getElementById("comentario_testigos_panel").value;

      const plumillas_si = document.getElementById("plumillas_si").checked;
      const plumillas_no = document.getElementById("plumillas_no").checked;
      const c_plumillas = document.getElementById("comentario_plumillas").value;

      //
      //
      //

      const freno_servicio_si = document.getElementById("freno_servicio_si").checked;
      const freno_servicio_no = document.getElementById("freno_servicio_no").checked;
      const c_freno_servicio = document.getElementById("comentario_freno_servicio").value;

      const fugas_aceite_si = document.getElementById("fugas_aceite_si").checked;
      const fugas_aceite_no = document.getElementById("fugas_aceite_no").checked;
      const c_fugas_aceite = document.getElementById("comentario_fugas_aceite").value;

      const sistema_4x4_si = document.getElementById("sistema_4x4_si").checked;
      const sistema_4x4_no = document.getElementById("sistema_4x4_no").checked;
      const c_sistema_4x4 = document.getElementById("comentario_sistema_4x4").value;

      const nivel_combustible_si = document.getElementById("nivel_combustible_si").checked;
      const nivel_combustible_no = document.getElementById("nivel_combustible_no").checked;
      const c_nivel_combustible = document.getElementById("comentario_nivel_combustible").value;

      const temperatura_motor_si = document.getElementById("temperatura_motor_si").checked;
      const temperatura_motor_no = document.getElementById("temperatura_motor_no").checked;
      const c_temperatura_motor = document.getElementById("comentario_temperatura_motor").value;

      const presion_aceite_si = document.getElementById("presion_aceite_si").checked;
      const presion_aceite_no = document.getElementById("presion_aceite_no").checked;
      const c_presion_aceite = document.getElementById("comentario_presion_aceite").value;

      const aire_acondicionado_si = document.getElementById("aire_acondicionado_si").checked;
      const aire_acondicionado_no = document.getElementById("aire_acondicionado_no").checked;
      const c_aire_acondicionado = document.getElementById("comentario_aire_acondicionado").value;

      const direccion_si = document.getElementById("direccion_si").checked;
      const direccion_no = document.getElementById("direccion_no").checked;
      const c_direccion = document.getElementById("comentario_direccion").value;

      const pedales_si = document.getElementById("pedales_si").checked;
      const pedales_no = document.getElementById("pedales_no").checked;
      const c_pedales = document.getElementById("comentario_pedales").value;

      const fun_puertas_si = document.getElementById("puertas_si").checked;
      const fun_puertas_no = document.getElementById("puertas_no").checked;
      const c_fun_puertas = document.getElementById("comentario_puertas").value;

      const fun_ventanas_si = document.getElementById("fun_ventanas_si").checked;
      const fun_ventanas_no = document.getElementById("fun_ventanas_no").checked;
      const c_fun_ventanas = document.getElementById("comentario_fun_ventanas").value;
      //
      //
      //
      const tarjeta_propiedad_si = document.getElementById("tarjeta_propiedad_si").checked;
      const tarjeta_propiedad_no = document.getElementById("tarjeta_propiedad_no").checked;
      const c_tarjeta_propiedad = document.getElementById("comentario_tarjeta_propiedad").value;

      const manual_operacion_si = document.getElementById("manual_operacion_si").checked;
      const manual_operacion_no = document.getElementById("manual_operacion_no").checked;
      const c_manual_operacion = document.getElementById("comentario_manual_operacion").value;

      const revision_tecnica_si = document.getElementById("revision_tecnica_si").checked;
      const revision_tecnica_no = document.getElementById("revision_tecnica_no").checked;
      const c_revision_tecnica = document.getElementById("comentario_revision_tecnica").value;

      const soat_si = document.getElementById("soat_si").checked;
      const soat_no = document.getElementById("soat_no").checked;
      const c_soat = document.getElementById("comentario_soat").value;

      const tarjeta_circulacion_si = document.getElementById("tarjeta_circulacion_si").checked;
      const tarjeta_circulacion_no = document.getElementById("tarjeta_circulacion_no").checked;
      const c_tarjeta_circulacion = document.getElementById("comentario_tarjeta_circulacion").value;

      const tapa_aceite_motor_si = document.getElementById("tapa_aceite_motor_si").checked;
      const tapa_aceite_motor_no = document.getElementById("tapa_aceite_motor_no").checked;
      const c_tapa_aceite_motor = document.getElementById("comentario_tapa_aceite_motor").value;

      const tapa_aceite_hidraulico_si = document.getElementById("tapa_aceite_hidraulico_si").checked;
      const tapa_aceite_hidraulico_no = document.getElementById("tapa_aceite_hidraulico_no").checked;
      const c_tapa_aceite_hidraulico = document.getElementById("comentario_tapa_aceite_hidraulico").value;

      const tapa_liquido_frenos_si = document.getElementById("tapa_liquido_frenos_si").checked;
      const tapa_liquido_frenos_no = document.getElementById("tapa_liquido_frenos_no").checked;
      const c_tapa_liquido_frenos = document.getElementById("comentario_tapa_liquido_frenos").value;

      const tapa_refrigerante_si = document.getElementById("tapa_refrigerante_si").checked;
      const tapa_refrigerante_no = document.getElementById("tapa_refrigerante_no").checked;
      const c_tapa_refrigerante = document.getElementById("comentario_tapa_refrigerante").value;

      const tapa_agua_parabrisas_si = document.getElementById("tapa_agua_parabrisas_si").checked;
      const tapa_agua_parabrisas_no = document.getElementById("tapa_agua_parabrisas_no").checked;
      const c_tapa_agua_parabrisas = document.getElementById("comentario_tapa_agua_parabrisas").value;

      const protector_borne_si = document.getElementById("protector_bateria_si").checked;
      const protector_borne_no = document.getElementById("protector_bateria_no").checked;
      const c_protector_borne = document.getElementById("comentario_protector_bateria").value;

      const fajas_alternador_si = document.getElementById("fajas_alternador_si").checked;
      const fajas_alternador_no = document.getElementById("fajas_alternador_no").checked;
      const c_fajas_alternador = document.getElementById("comentario_fajas_alternador").value;

      const caja_fusibles_si = document.getElementById("caja_fusibles_si").checked;
      const caja_fusibles_no = document.getElementById("caja_fusibles_no").checked;
      const c_caja_fusibles = document.getElementById("comentario_caja_fusibles").value;

      const tapa_filtro_aire_si = document.getElementById("tapa_filtro_aire_si").checked;
      const tapa_filtro_aire_no = document.getElementById("tapa_filtro_aire_no").checked;
      const c_tapa_filtro_aire = document.getElementById("comentario_tapa_filtro_aire").value;

      const medidor_aire_si = document.getElementById("medidor_aire_si").checked;
      const medidor_aire_no = document.getElementById("medidor_aire_no").checked;
      const c_medidor_aire = document.getElementById("comentario_medidor_aire").value;

      const aros_pestanas_si = document.getElementById("aros_si").checked;
      const aros_pestanas_no = document.getElementById("aros_no").checked;
      const c_aros_pestanas = document.getElementById("comentario_aros").value;

      const p1_cocada_si = document.getElementById("p1_si").checked;
      const p1_cocada_no = document.getElementById("p1_no").checked;
      const c_p1_cocada = document.getElementById("comentario_p1").value;

      const p2_cocada_si = document.getElementById("p2_si").checked;
      const p2_cocada_no = document.getElementById("p2_no").checked;
      const c_p2_cocada = document.getElementById("comentario_p2").value;

      const p3_cocada_si = document.getElementById("p3_si").checked;
      const p3_cocada_no = document.getElementById("p3_no").checked;
      const c_p3_cocada = document.getElementById("comentario_p3").value;

      const p4_cocada_si = document.getElementById("p4_si").checked;
      const p4_cocada_no = document.getElementById("p4_no").checked;
      const c_p4_cocada = document.getElementById("comentario_p4").value;

      const p5_cocada_si = document.getElementById("p5_si").checked;
      const p5_cocada_no = document.getElementById("p5_no").checked;
      const c_p5_cocada = document.getElementById("comentario_p5").value;

      const p6_cocada_si = document.getElementById("p6_si").checked;
      const p6_cocada_no = document.getElementById("p6_no").checked;
      const c_p6_cocada = document.getElementById("comentario_p6").value;

      const llanta_repuesto_si = document.getElementById("llanta_med_si").checked;
      const llanta_repuesto_no = document.getElementById("llanta_med_no").checked;
      const c_llanta_repuesto = document.getElementById("comentario_llanta_med").value;

      const gata_si = document.getElementById("gata_si").checked;
      const gata_no = document.getElementById("gata_no").checked;
      const c_gata = document.getElementById("comentario_gata").value;

      const llave_ruedas_si = document.getElementById("llave_ruedas_si").checked;
      const llave_ruedas_no = document.getElementById("llave_ruedas_no").checked;
      const c_llave_ruedas = document.getElementById("comentario_llave_ruedas").value;

      const traba_tuercas_si = document.getElementById("traba_tuercas_si").checked;
      const traba_tuercas_no = document.getElementById("traba_tuercas_no").checked;
      const c_traba_tuercas = document.getElementById("comentario_traba_tuercas").value;

      const antivuelco_ext_si = document.getElementById("antivuelco_ext_si").checked;
      const antivuelco_ext_no = document.getElementById("antivuelco_ext_no").checked;
      const c_antivuelco_ext = document.getElementById("comentario_antivuelco_ext").value;

      const jaula_antivuelco_si = document.getElementById("jaula_antivuelco_si").checked;
      const jaula_antivuelco_no = document.getElementById("jaula_antivuelco_no").checked;
      const c_jaula_antivuelco = document.getElementById("comentario_jaula_antivuelco").value;

      const letrero_punto_ciego_si = document.getElementById("punto_ciego_si").checked;
      const letrero_punto_ciego_no = document.getElementById("punto_ciego_no").checked;
      const c_letrero_punto_ciego = document.getElementById("comentario_punto_ciego").value;

      const letrero_distancia_si = document.getElementById("letrero_distancia_si").checked;
      const letrero_distancia_no = document.getElementById("letrero_distancia_no").checked;
      const c_letrero_distancia = document.getElementById("comentario_letrero_distancia").value;

      const letrero_aereo_si = document.getElementById("letrero_aereo_si").checked;
      const letrero_aereo_no = document.getElementById("letrero_aereo_no").checked;
      const c_letrero_aereo = document.getElementById("comentario_letrero_aereo").value;

      const nvl1=document.getElementById("nivel1").checked;
      const nvl2=document.getElementById("nivel2").checked;
      const nvl3=document.getElementById("nivel3").checked;
      const nvl4=document.getElementById("nivel4").checked;
      const nvl5=document.getElementById("nivel5").checked;
    

      //Tamaño de Pagina 
      const page = pdfDoc.addPage([595.28, 841.89]);

      // Fondo de plantilla
      const imgUrl = './assets/plantilla_formulario.jpg';
      const imgBytes = await fetch(imgUrl).then(res => res.arrayBuffer());
      const jpgImage = await pdfDoc.embedJpg(imgBytes);
      page.drawImage(jpgImage, {
        x: 0,
        y: 0,
        width: page.getWidth(),
        height: page.getHeight(),
      });

      //Info Principal
      page.drawText(`${placa}`, {x: 50, y: 760,size: 11,color: rgb(0, 0, 0),});
      page.drawText(`${empresa}`, {x: 225,y: 775,size: 11,color: rgb(0, 0, 0),});
      page.drawText(`${conductor}`, {x: 225,y: 760,size: 11,color: rgb(0, 0, 0),});
      page.drawText(`${fecha_ingreso}`, {x: 225,y: 790,size: 11,color: rgb(0, 0, 0),});
      page.drawText(`${hora_ingreso}`, {x: 452,y: 760,size: 11,color: rgb(0, 0, 0),});  
      page.drawText(`${fecha_Salida}`, {x: 452,y: 790,size: 11,color: rgb(0, 0, 0),});
      page.drawText(`${kilometraje}`, {x: 452,y: 775,size: 11,color: rgb(0, 0, 0),});

      // Elementos
      page.drawText(`${c_botiquin}`, {x:190,y: 491,size: 10,color: rgb(0, 0, 0),});
      if (botiquin_si) {page.drawText('X', {x: 160,y: 491, size: 16,color: rgb(0, 0, 0),});
      } else if (botiquin_no) {page.drawText('X', {x: 175,y: 491,size: 16,color: rgb(0, 0, 0),});}

      page.drawText(`${c_extintor}`, {x: 190, y: 476, size: 10, color: rgb(0, 0, 0)});
      if (extintor_si) { page.drawText('X', {x: 160, y: 476, size: 16, color: rgb(0, 0, 0)}); }
      else if (extintor_no) { page.drawText('X', {x: 175, y: 476, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_conos}`, {x:190, y: 462, size: 10, color: rgb(0, 0, 0)});
      page.drawText(`(0${can_conos})`, {x:130, y: 465, size: 10, color: rgb(0, 0, 0)});
      if (conos_si) { page.drawText('X', {x: 160, y: 462, size: 16, color: rgb(0, 0, 0)}); }
      else if (conos_no) { page.drawText('X', {x: 175, y: 462, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_tacos}`, {x:190, y: 447, size: 10, color: rgb(0, 0, 0)});
      page.drawText(`(0${can_tacos})`, {x:130, y: 450, size: 10, color: rgb(0, 0, 0)});
      if (tacos_si) { page.drawText('X', {x: 160, y: 447, size: 16, color: rgb(0, 0, 0)}); }
      else if (tacos_no) { page.drawText('X', {x: 175, y: 447, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_triangulo}`, {x: 190, y: 433, size: 10, color: rgb(0, 0, 0)});
      page.drawText(`(0${can_triangu})`, {x:130, y: 436, size: 10, color: rgb(0, 0, 0)});
      if (triangulo_si) { page.drawText('X', {x: 160, y: 433, size: 16, color: rgb(0, 0, 0)}); }
      else if (triangulo_no) { page.drawText('X', {x: 175, y: 433, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_remolque}`, {x:190, y: 419, size: 10, color: rgb(0, 0, 0)});
      if (remolque_si) { page.drawText('X', {x: 160, y: 419, size: 16, color: rgb(0, 0, 0)}); }
      else if (remolque_no) { page.drawText('X', {x: 175, y: 419, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_pase}`, {x: 190, y: 405, size: 10, color: rgb(0, 0, 0)});
      if (pase_si) { page.drawText('X', {x: 160, y: 405, size: 16, color: rgb(0, 0, 0)}); }
      else if (pase_no) { page.drawText('X', {x: 175, y: 405, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_eslinga}`, {x: 190, y: 391, size: 10, color: rgb(0, 0, 0)});
      if (eslinga_si) { page.drawText('X', {x: 160, y: 391, size: 16, color: rgb(0, 0, 0)}); }
      else if (eslinga_no) { page.drawText('X', {x: 175, y: 391, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_linterna}`, {x: 190, y: 376, size: 10, color: rgb(0, 0, 0)});
      if (linterna_si) { page.drawText('X', {x: 160, y: 376, size: 16, color: rgb(0, 0, 0)}); }
      else if (linterna_no) { page.drawText('X', {x: 175, y: 376, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_herramientas}`, {x: 190, y: 362, size: 10, color: rgb(0, 0, 0)});
      if (herramientas_si) { page.drawText('X', {x: 160, y: 362, size: 16, color: rgb(0, 0, 0)}); }
      else if (herramientas_no) { page.drawText('X', {x: 175, y: 362, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_antiderrames}`, {x: 190, y: 348, size: 10, color: rgb(0, 0, 0)});
      if (antiderrames_si) { page.drawText('X', {x: 160, y: 348, size: 16, color: rgb(0, 0, 0)}); }
      else if (antiderrames_no) { page.drawText('X', {x: 175, y: 348, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_martillo}`, {x: 190, y: 334, size: 10, color: rgb(0, 0, 0)});
      if (martillo_si) { page.drawText('X', {x: 160, y: 334, size: 16, color: rgb(0, 0, 0)}); }
      else if (martillo_no) { page.drawText('X', {x: 175, y: 334, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_circulina}`, {x: 190, y: 319, size: 10, color: rgb(0, 0, 0)});
      if (circulina_si) { page.drawText('X', {x: 160, y: 319, size: 16, color: rgb(0, 0, 0)}); }
      else if (circulina_no) { page.drawText('X', {x: 175, y: 319, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_cinta}`, {x: 190, y: 305, size: 10, color: rgb(0, 0, 0)});
      if (cinta_si) { page.drawText('X', {x: 160, y: 305, size: 16, color: rgb(0, 0, 0)}); }
      else if (cinta_no) { page.drawText('X', {x: 175, y: 305, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_cinturon}`, {x: 190, y: 291, size: 10, color: rgb(0, 0, 0)});
      if (cinturon_si) { page.drawText('X', {x: 160, y: 291, size: 16, color: rgb(0, 0, 0)}); }
      else if (cinturon_no) { page.drawText('X', {x: 175, y: 291, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_pertiga}`, {x: 190, y: 276, size: 10, color: rgb(0, 0, 0)});
      if (pertiga_si) { page.drawText('X', {x: 160, y: 276, size: 16, color: rgb(0, 0, 0)}); }
      else if (pertiga_no) { page.drawText('X', {x: 175, y:276, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_camara}`, {x: 190, y: 262, size: 10, color: rgb(0, 0, 0)});
      if (camara_si) { page.drawText('X', {x: 160, y: 262, size: 16, color: rgb(0, 0, 0)}); }
      else if (camara_no) { page.drawText('X', {x: 175, y: 262, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_sirena}`, {x: 190, y: 248, size: 10, color: rgb(0, 0, 0)});
      if (sirena_si) { page.drawText('X', {x: 160, y: 248, size: 16, color: rgb(0, 0, 0)}); }
      else if (sirena_no) { page.drawText('X', {x: 175, y: 248, size: 16, color: rgb(0, 0, 0)}); }
      ////
      ////
      ////
      page.drawText(`${c_luces_delanteras}`, {x: 190, y: 719, size: 10, color: rgb(0, 0, 0)});
      if (luces_delanteras_si) { page.drawText('X', {x: 160, y: 719, size: 16, color: rgb(0, 0, 0)}); }
      else if (luces_delanteras_no) { page.drawText('X', {x: 175, y: 719, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_neblineros}`, {x: 190, y: 704, size: 10, color: rgb(0, 0, 0)});
      if (neblineros_si) { page.drawText('X', {x: 160, y: 704, size: 16, color: rgb(0, 0, 0)}); }
      else if (neblineros_no) { page.drawText('X', {x: 175, y: 704, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_direccionales}`, {x: 190, y: 691, size: 10, color: rgb(0, 0, 0)});
      if (direccionales_si) { page.drawText('X', {x: 160, y: 691, size: 16, color: rgb(0, 0, 0)}); }
      else if (direccionales_no) { page.drawText('X', {x: 175, y: 691, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_luces_salon}`, {x: 190, y: 677, size: 10, color: rgb(0, 0, 0)});
      if (luces_salon_si) { page.drawText('X', {x: 160, y: 677, size: 16, color: rgb(0, 0, 0)}); }
      else if (luces_salon_no) { page.drawText('X', {x: 175, y: 677, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_luces_emergencia}`, {x: 190, y: 662, size: 10, color: rgb(0, 0, 0)});
      if (luces_emergencia_si) { page.drawText('X', {x: 160, y: 662, size: 16, color: rgb(0, 0, 0)}); }
      else if (luces_emergencia_no) { page.drawText('X', {x: 175, y: 662, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_claxon}`, {x: 190, y: 647, size: 10, color: rgb(0, 0, 0)});
      if (claxon_si) { page.drawText('X', {x: 160, y: 647, size: 16, color: rgb(0, 0, 0)}); }
      else if (claxon_no) { page.drawText('X', {x: 175, y: 647, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_luces_freno}`, {x: 190, y: 633, size: 10, color: rgb(0, 0, 0)});
      if (luces_freno_si) { page.drawText('X', {x: 160, y: 633, size: 16, color: rgb(0, 0, 0)}); }
      else if (luces_freno_no) { page.drawText('X', {x: 175, y: 633, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_luces_posteriores}`, {x: 190, y: 619, size: 10, color: rgb(0, 0, 0)});
      if (luces_posteriores_si) { page.drawText('X', {x: 160, y: 619, size: 16, color: rgb(0, 0, 0)}); }
      else if (luces_posteriores_no) { page.drawText('X', {x: 175, y: 619, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_faro_pirata}`, {x: 190, y: 605, size: 10, color: rgb(0, 0, 0)});
      if (faro_pirata_si) { page.drawText('X', {x: 160, y: 605, size: 16, color: rgb(0, 0, 0)}); }
      else if (faro_pirata_no) { page.drawText('X', {x: 175, y: 605, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_alarma_retroceso}`, {x: 190, y: 590, size: 10, color: rgb(0, 0, 0)});
      if (alarma_retroceso_si) { page.drawText('X', {x: 160, y: 590, size: 16, color: rgb(0, 0, 0)}); }
      else if (alarma_retroceso_no) { page.drawText('X', {x: 175, y: 590, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_limpia_parabrisas}`, {x: 190, y: 576, size: 10, color: rgb(0, 0, 0)});
      if (limpia_parabrisas_si) { page.drawText('X', {x: 160, y: 576, size: 16, color: rgb(0, 0, 0)}); }
      else if (limpia_parabrisas_no) { page.drawText('X', {x: 175, y: 576, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_espejos_retrovisores}`, {x: 190, y: 562, size: 10, color: rgb(0, 0, 0)});
      if (espejos_retrovisores_si) { page.drawText('X', {x: 160, y: 562, size: 16, color: rgb(0, 0, 0)}); }
      else if (espejos_retrovisores_no) { page.drawText('X', {x: 175, y: 562, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_ventanas_laterales}`, {x: 190, y: 548, size: 10, color: rgb(0, 0, 0)});
      if (ventanas_laterales_si) { page.drawText('X', {x: 160, y: 548, size: 16, color: rgb(0, 0, 0)}); }
      else if (ventanas_laterales_no) { page.drawText('X', {x: 175, y: 548, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_testigos_panel}`, {x: 190, y: 534, size: 10, color: rgb(0, 0, 0)});
      if (testigos_panel_si) { page.drawText('X', {x: 160, y: 534, size: 16, color: rgb(0, 0, 0)}); }
      else if (testigos_panel_no) { page.drawText('X', {x: 175, y: 534, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_plumillas}`, {x: 190, y: 519, size: 10, color: rgb(0, 0, 0)});
      if (plumillas_si) { page.drawText('X', {x: 160, y: 519, size: 16, color: rgb(0, 0, 0)}); }
      else if (plumillas_no) { page.drawText('X', {x: 175, y: 519, size: 16, color: rgb(0, 0, 0)}); }
      ////
      ////
      ////
      // FRENO DE SERVICIO
      page.drawText(`${c_freno_servicio}`, {x: 190, y: 220, size: 10, color: rgb(0, 0, 0)});
      if (freno_servicio_si) { page.drawText('X', {x: 160, y: 220, size: 16, color: rgb(0, 0, 0)}); }
      else if (freno_servicio_no) { page.drawText('X', {x: 175, y: 220, size: 16, color: rgb(0, 0, 0)}); }

      // FUGAS DE ACEITE/D2
      page.drawText(`${c_fugas_aceite}`, {x: 190, y: 206, size: 10, color: rgb(0, 0, 0)});
      if (fugas_aceite_si) { page.drawText('X', {x: 160, y: 206, size: 16, color: rgb(0, 0, 0)}); }
      else if (fugas_aceite_no) { page.drawText('X', {x: 175, y: 206, size: 16, color: rgb(0, 0, 0)}); }

      // SISTEMA 4X4
      page.drawText(`${c_sistema_4x4}`, {x: 190, y: 192, size: 10, color: rgb(0, 0, 0)});
      if (sistema_4x4_si) { page.drawText('X', {x: 160, y: 192, size: 16, color: rgb(0, 0, 0)}); }
      else if (sistema_4x4_no) { page.drawText('X', {x: 175, y: 192, size: 16, color: rgb(0, 0, 0)}); }

      // NIVEL DE COMBUSTIBLE
      page.drawText(`${c_nivel_combustible}`, {x: 190, y: 176, size: 10, color: rgb(0, 0, 0)});
      if (nivel_combustible_si) { page.drawText('X', {x: 160, y: 176, size: 16, color: rgb(0, 0, 0)}); }
      else if (nivel_combustible_no) { page.drawText('X', {x: 175, y: 176, size: 16, color: rgb(0, 0, 0)}); }

      // TEMPERATURA DE MOTOR
      page.drawText(`${c_temperatura_motor}`, {x: 190, y: 162, size: 10, color: rgb(0, 0, 0)});
      if (temperatura_motor_si) { page.drawText('X', {x: 160, y: 162, size: 16, color: rgb(0, 0, 0)}); }
      else if (temperatura_motor_no) { page.drawText('X', {x: 175, y: 162, size: 16, color: rgb(0, 0, 0)}); }

      // PRESIÓN DE ACEITE
      page.drawText(`${c_presion_aceite}`, {x: 190, y: 148, size: 10, color: rgb(0, 0, 0)});
      if (presion_aceite_si) { page.drawText('X', {x: 160, y: 148, size: 16, color: rgb(0, 0, 0)}); }
      else if (presion_aceite_no) { page.drawText('X', {x: 175, y: 148, size: 16, color: rgb(0, 0, 0)}); }

      // AIRE ACONDICIONADO
      page.drawText(`${c_aire_acondicionado}`, {x: 190, y: 134, size: 10, color: rgb(0, 0, 0)});
      if (aire_acondicionado_si) { page.drawText('X', {x: 160, y: 134, size: 16, color: rgb(0, 0, 0)}); }
      else if (aire_acondicionado_no) { page.drawText('X', {x: 175, y: 134, size: 16, color: rgb(0, 0, 0)}); }

      // DIRECCIÓN
      page.drawText(`${c_direccion}`, {x: 190, y: 119, size: 10, color: rgb(0, 0, 0)});
      if (direccion_si) { page.drawText('X', {x: 160, y: 119, size: 16, color: rgb(0, 0, 0)}); }
      else if (direccion_no) { page.drawText('X', {x: 175, y: 119, size: 16, color: rgb(0, 0, 0)}); }

      // PEDALES
      page.drawText(`${c_pedales}`, {x: 190, y: 104, size: 10, color: rgb(0, 0, 0)});
      if (pedales_si) { page.drawText('X', {x: 160, y: 104, size: 16, color: rgb(0, 0, 0)}); }
      else if (pedales_no) { page.drawText('X', {x: 175, y: 104, size: 16, color: rgb(0, 0, 0)}); }

      // FUNCIONAMIENTO DE PUERTAS
      page.drawText(`${c_fun_puertas}`, {x: 190, y: 90, size: 10, color: rgb(0, 0, 0)});
      if (fun_puertas_si) { page.drawText('X', {x: 160, y: 90, size: 16, color: rgb(0, 0, 0)}); }
      else if (fun_puertas_no) { page.drawText('X', {x: 175, y: 90, size: 16, color: rgb(0, 0, 0)}); }

      // FUNCIONAMIENTO DE VENTANAS
      page.drawText(`${c_fun_ventanas}`, {x: 190, y: 76, size: 10, color: rgb(0, 0, 0)});
      if (fun_ventanas_si) { page.drawText('X', {x: 160, y: 76, size: 16, color: rgb(0, 0, 0)}); }
      else if (fun_ventanas_no) { page.drawText('X', {x: 175, y: 76, size: 16, color: rgb(0, 0, 0)}); }
      ////
      ////
      ////
      page.drawText(`${c_tarjeta_propiedad}`, {x: 450, y: 719, size: 10, color: rgb(0, 0, 0)});
      if (tarjeta_propiedad_si) { page.drawText('X', {x: 423, y: 719, size: 16, color: rgb(0, 0, 0)}); }
      else if (tarjeta_propiedad_no) { page.drawText('X', {x: 437, y: 719, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_manual_operacion}`, {x: 450, y: 704, size: 10, color: rgb(0, 0, 0)});
      if (manual_operacion_si) { page.drawText('X', {x: 423, y: 704, size: 16, color: rgb(0, 0, 0)}); }
      else if (manual_operacion_no) { page.drawText('X', {x: 437, y: 704, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_revision_tecnica}`, {x: 450, y: 691, size: 10, color: rgb(0, 0, 0)});
      if (revision_tecnica_si) { page.drawText('X', {x: 423, y: 691, size: 16, color: rgb(0, 0, 0)}); }
      else if (revision_tecnica_no) { page.drawText('X', {x: 437, y: 691, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_soat}`, {x: 450, y: 677, size: 10, color: rgb(0, 0, 0)});
      if (soat_si) { page.drawText('X', {x: 423, y: 677, size: 16, color: rgb(0, 0, 0)}); }
      else if (soat_no) { page.drawText('X', {x: 437, y: 677, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_tarjeta_circulacion}`, {x: 450, y: 662, size: 10, color: rgb(0, 0, 0)});
      if (tarjeta_circulacion_si) { page.drawText('X', {x: 423, y: 662, size: 16, color: rgb(0, 0, 0)}); }
      else if (tarjeta_circulacion_no) { page.drawText('X', {x: 437, y: 662, size: 16, color: rgb(0, 0, 0)}); }
      ////
      ////
      ////
      page.drawText(`${c_tapa_aceite_motor}`, {x: 450, y: 633, size: 10, color: rgb(0, 0, 0)});
      if (tapa_aceite_motor_si) { page.drawText('X', {x: 423, y: 633, size: 16, color: rgb(0, 0, 0)}); }
      else if (tapa_aceite_motor_no) { page.drawText('X', {x: 437, y: 633, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_tapa_aceite_hidraulico}`, {x: 450, y: 619, size: 10, color: rgb(0, 0, 0)});
      if (tapa_aceite_hidraulico_si) { page.drawText('X', {x: 423, y: 619, size: 16, color: rgb(0, 0, 0)}); }
      else if (tapa_aceite_hidraulico_no) { page.drawText('X', {x: 437, y: 619, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_tapa_liquido_frenos}`, {x: 450, y: 605, size: 10, color: rgb(0, 0, 0)});
      if (tapa_liquido_frenos_si) { page.drawText('X', {x: 423, y: 605, size: 16, color: rgb(0, 0, 0)}); }
      else if (tapa_liquido_frenos_no) { page.drawText('X', {x: 437, y: 605, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_tapa_refrigerante}`, {x: 450, y: 590, size: 10, color: rgb(0, 0, 0)});
      if (tapa_refrigerante_si) { page.drawText('X', {x: 423, y: 590, size: 16, color: rgb(0, 0, 0)}); }
      else if (tapa_refrigerante_no) { page.drawText('X', {x: 437, y: 590, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_tapa_agua_parabrisas}`, {x: 450, y: 576, size: 10, color: rgb(0, 0, 0)});
      if (tapa_agua_parabrisas_si) { page.drawText('X', {x: 423, y: 576, size: 16, color: rgb(0, 0, 0)}); }
      else if (tapa_agua_parabrisas_no) { page.drawText('X', {x: 437, y: 576, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_protector_borne}`, {x: 450, y: 562, size: 10, color: rgb(0, 0, 0)});
      if (protector_borne_si) { page.drawText('X', {x: 423, y: 562, size: 16, color: rgb(0, 0, 0)}); }
      else if (protector_borne_no) { page.drawText('X', {x: 437, y: 562, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_fajas_alternador}`, {x: 450, y: 548, size: 10, color: rgb(0, 0, 0)});
      if (fajas_alternador_si) { page.drawText('X', {x: 423, y: 548, size: 16, color: rgb(0, 0, 0)}); }
      else if (fajas_alternador_no) { page.drawText('X', {x: 437, y: 548, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_caja_fusibles}`, {x: 450, y: 534, size: 10, color: rgb(0, 0, 0)});
      if (caja_fusibles_si) { page.drawText('X', {x: 423, y: 534, size: 16, color: rgb(0, 0, 0)}); }
      else if (caja_fusibles_no) { page.drawText('X', {x: 437, y: 534, size: 16, color: rgb(0, 0, 0)}); }

      page.drawText(`${c_tapa_filtro_aire}`, {x: 450, y: 519, size: 10, color: rgb(0, 0, 0)});
      if (tapa_filtro_aire_si) { page.drawText('X', {x: 423, y: 519, size: 16, color: rgb(0, 0, 0)}); }
      else if (tapa_filtro_aire_no) { page.drawText('X', {x: 437, y: 519, size: 16, color: rgb(0, 0, 0)}); }
      ////
      ////
      ////
      // MEDIDOR DE AIRE
      page.drawText(`${c_medidor_aire}`, { x: 450, y: 491, size: 10, color: rgb(0, 0, 0) });
      if (medidor_aire_si) { page.drawText('X', { x: 423, y: 491, size: 16, color: rgb(0, 0, 0) }); }
      else if (medidor_aire_no) { page.drawText('X', { x: 437, y: 491, size: 16, color: rgb(0, 0, 0) }); }

      // AROS Y PESTAÑAS
      page.drawText(`${c_aros_pestanas}`, { x: 450, y: 476, size: 10, color: rgb(0, 0, 0) });
      if (aros_pestanas_si) { page.drawText('X', { x: 423, y: 476, size: 16, color: rgb(0, 0, 0) }); }
      else if (aros_pestanas_no) { page.drawText('X', { x: 437, y: 476, size: 16, color: rgb(0, 0, 0) }); }

      // P-1 COCADA
      page.drawText(`${c_p1_cocada}`, { x: 450, y: 462, size: 10, color: rgb(0, 0, 0) });
      if (p1_cocada_si) { page.drawText('X', { x: 423, y: 462, size: 16, color: rgb(0, 0, 0) }); }
      else if (p1_cocada_no) { page.drawText('X', { x: 437, y: 462, size: 16, color: rgb(0, 0, 0) }); }

      // P-2 COCADA
      page.drawText(`${c_p2_cocada}`, { x: 450, y: 447, size: 10, color: rgb(0, 0, 0) });
      if (p2_cocada_si) { page.drawText('X', { x: 423, y: 447, size: 16, color: rgb(0, 0, 0) }); }
      else if (p2_cocada_no) { page.drawText('X', { x: 437, y: 447, size: 16, color: rgb(0, 0, 0) }); }

      // P-3 COCADA
      page.drawText(`${c_p3_cocada}`, { x: 450, y: 433, size: 10, color: rgb(0, 0, 0) });
      if (p3_cocada_si) { page.drawText('X', { x: 423, y: 433, size: 16, color: rgb(0, 0, 0) }); }
      else if (p3_cocada_no) { page.drawText('X', { x: 437, y: 433, size: 16, color: rgb(0, 0, 0) }); }

      // P-4 COCADA
      page.drawText(`${c_p4_cocada}`, { x: 450, y: 419, size: 10, color: rgb(0, 0, 0) });
      if (p4_cocada_si) { page.drawText('X', { x: 423, y: 419, size: 16, color: rgb(0, 0, 0) }); }
      else if (p4_cocada_no) { page.drawText('X', { x: 437, y: 419, size: 16, color: rgb(0, 0, 0) }); }

      // P-5 COCADA
      page.drawText(`${c_p5_cocada}`, { x: 450, y: 405, size: 10, color: rgb(0, 0, 0) });
      if (p5_cocada_si) { page.drawText('X', { x: 423, y: 405, size: 16, color: rgb(0, 0, 0) }); }
      else if (p5_cocada_no) { page.drawText('X', { x: 437, y: 405, size: 16, color: rgb(0, 0, 0) }); }

      // P-6 COCADA
      page.drawText(`${c_p6_cocada}`, { x: 450, y: 391, size: 10, color: rgb(0, 0, 0) });
      if (p6_cocada_si) { page.drawText('X', { x: 423, y: 391, size: 16, color: rgb(0, 0, 0) }); }
      else if (p6_cocada_no) { page.drawText('X', { x: 437, y: 391, size: 16, color: rgb(0, 0, 0) }); }

      // LLANTA DE REPUESTO
      page.drawText(`${c_llanta_repuesto}`, { x: 450, y: 376, size: 10, color: rgb(0, 0, 0) });
      if (llanta_repuesto_si) { page.drawText('X', { x: 423, y: 376, size: 16, color: rgb(0, 0, 0) }); }
      else if (llanta_repuesto_no) { page.drawText('X', { x: 437, y: 376, size: 16, color: rgb(0, 0, 0) }); }

      // GATA
      page.drawText(`${c_gata}`, { x: 450, y: 362, size: 10, color: rgb(0, 0, 0) });
      if (gata_si) { page.drawText('X', { x: 423, y: 362, size: 16, color: rgb(0, 0, 0) }); }
      else if (gata_no) { page.drawText('X', { x: 437, y: 362, size: 16, color: rgb(0, 0, 0) }); }

      // LLAVE DE RUEDAS
      page.drawText(`${c_llave_ruedas}`, { x: 450, y: 348, size: 10, color: rgb(0, 0, 0) });
      if (llave_ruedas_si) { page.drawText('X', { x: 423, y: 348, size: 16, color: rgb(0, 0, 0) }); }
      else if (llave_ruedas_no) { page.drawText('X', { x: 437, y: 348, size: 16, color: rgb(0, 0, 0) }); }

      // TRABA TUERCAS
      page.drawText(`${c_traba_tuercas}`, { x: 450, y: 334, size: 10, color: rgb(0, 0, 0) });
      if (traba_tuercas_si) { page.drawText('X', { x: 423, y: 334, size: 16, color: rgb(0, 0, 0) }); }
      else if (traba_tuercas_no) { page.drawText('X', { x: 437, y: 334, size: 16, color: rgb(0, 0, 0) }); }
      ////
      ////
      ////
      // ANTIVUELCO EXTERIOR
      page.drawText(`${c_antivuelco_ext}`, { x: 450, y: 305, size: 10, color: rgb(0, 0, 0) });
      if (antivuelco_ext_si) { page.drawText('X', { x: 423, y: 305, size: 16, color: rgb(0, 0, 0) }); }
      else if (antivuelco_ext_no) { page.drawText('X', { x: 437, y: 305, size: 16, color: rgb(0, 0, 0) }); }

      // JAULA ANTIVUELCO
      page.drawText(`${c_jaula_antivuelco}`, { x: 450, y: 291, size: 10, color: rgb(0, 0, 0) });
      if (jaula_antivuelco_si) { page.drawText('X', { x: 423, y: 291, size: 16, color: rgb(0, 0, 0) }); }
      else if (jaula_antivuelco_no) { page.drawText('X', { x: 437, y: 291, size: 16, color: rgb(0, 0, 0) }); }

      // LETRERO DE PUNTO CIEGO
      page.drawText(`${c_letrero_punto_ciego}`, { x: 450, y: 276, size: 10, color: rgb(0, 0, 0) });
      if (letrero_punto_ciego_si) { page.drawText('X', { x: 423, y: 276, size: 16, color: rgb(0, 0, 0) }); }
      else if (letrero_punto_ciego_no) { page.drawText('X', { x: 437, y: 276, size: 16, color: rgb(0, 0, 0) }); }

      // LETRERO DE DISTANCIA
      page.drawText(`${c_letrero_distancia}`, { x: 450, y: 262, size: 10, color: rgb(0, 0, 0) });
      if (letrero_distancia_si) { page.drawText('X', { x: 423, y: 262, size: 16, color: rgb(0, 0, 0) }); }
      else if (letrero_distancia_no) { page.drawText('X', { x: 437, y: 262, size: 16, color: rgb(0, 0, 0) }); }

      // LETRERO AÉREO
      page.drawText(`${c_letrero_aereo}`, { x: 450, y: 248, size: 10, color: rgb(0, 0, 0) });
      if (letrero_aereo_si) { page.drawText('X', { x: 423, y: 248, size: 16, color: rgb(0, 0, 0) }); }
      else if (letrero_aereo_no) { page.drawText('X', { x: 437, y: 248, size: 16, color: rgb(0, 0, 0) }); }

      if (nvl1) {
        page.drawText('X', { x: 558, y: 64, size: 14, color: rgb(0, 0, 0) });
      } else if (nvl2) {
        page.drawText('X', { x: 558, y: 52, size: 14, color: rgb(0, 0, 0) });
      } else if (nvl3) {
        page.drawText('X', { x: 558, y: 40, size: 14, color: rgb(0, 0, 0) });
      } else if (nvl4) {
        page.drawText('X', { x: 558, y: 28, size: 14, color: rgb(0, 0, 0) });
      } else if (nvl5) {
        page.drawText('X', { x: 558, y: 16, size: 14, color: rgb(0, 0, 0) });
}

      // Firmas desde canvas
      const firmaIngresoCanvas = document.getElementById('firmaIngresoCanvas');
      const firmaSalidaCanvas = document.getElementById('firmaSalidaCanvas');

      const firmaIngresoDataUrl = firmaIngresoCanvas.toDataURL();
      const firmaSalidaDataUrl = firmaSalidaCanvas.toDataURL();

      const firmaIngresoBytes = await fetch(firmaIngresoDataUrl).then(res => res.arrayBuffer());
      const firmaSalidaBytes = await fetch(firmaSalidaDataUrl).then(res => res.arrayBuffer());

      const firmaIngresoImg = await pdfDoc.embedPng(firmaIngresoBytes);
      const firmaSalidaImg = await pdfDoc.embedPng(firmaSalidaBytes);

      page.drawImage(firmaIngresoImg, { x: 70, y: 17, width: 100, height: 40 });
      page.drawImage(firmaSalidaImg, { x: 270, y: 17, width: 100, height: 40 });

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank');
    } catch (error) {
      console.error("Error al generar PDF:", error);
    }
  });
});
