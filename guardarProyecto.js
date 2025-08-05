document.getElementById("guardarProyectoBtn").addEventListener("click", function () {
  // Obtén los datos del formulario
  const datosFormulario = {
    placa: document.getElementById("placa").value,
    empresa: document.getElementById("empresa").value,
    conductor: document.getElementById("conductor").value,
    fecha_ingreso: document.getElementById("fecha_ingreso").value,
    hora_ingreso: document.getElementById("hora_ingreso").value,
    fecha_salida: document.getElementById("fecha_salida").value,
    kilometraje: document.getElementById("kilometraje").value,
    tipo_combustible: document.getElementById("tipo_combustible").value,
    //
    // Componentes Principales
    //
    luces_delanteras_si: document.getElementById("luces_delanteras_si").checked,
    luces_delanteras_no: document.getElementById("luces_delanteras_no").checked,
    comentario_luces_delanteras: document.getElementById("comentario_luces_delanteras").value,

    neblineros_si: document.getElementById("neblineros_si").checked,
    neblineros_no: document.getElementById("neblineros_no").checked,
    comentario_neblineros: document.getElementById("comentario_neblineros").value,

    direccionales_si: document.getElementById("direccionales_si").checked,
    direccionales_no: document.getElementById("direccionales_no").checked,
    comentario_direccionales: document.getElementById("comentario_direccionales").value,

    luces_salon_si: document.getElementById("luces_salon_si").checked,
    luces_salon_no: document.getElementById("luces_salon_no").checked,
    comentario_luces_salon: document.getElementById("comentario_luces_salon").value,

    luces_emergencia_si: document.getElementById("luces_emergencia_si").checked,
    luces_emergencia_no: document.getElementById("luces_emergencia_no").checked,
    comentario_luces_emergencia: document.getElementById("comentario_luces_emergencia").value,

    claxon_si: document.getElementById("claxon_si").checked,
    claxon_no: document.getElementById("claxon_no").checked,
    comentario_claxon: document.getElementById("comentario_claxon").value,

    luces_freno_si: document.getElementById("luces_freno_si").checked,
    luces_freno_no: document.getElementById("luces_freno_no").checked,
    comentario_luces_freno: document.getElementById("comentario_luces_freno").value,

    luces_posteriores_si: document.getElementById("luces_posteriores_si").checked,
    luces_posteriores_no: document.getElementById("luces_posteriores_no").checked,
    comentario_luces_posteriores: document.getElementById("comentario_luces_posteriores").value,

    faro_pirata_si: document.getElementById("faro_pirata_si").checked,
    faro_pirata_no: document.getElementById("faro_pirata_no").checked,
    comentario_faro_pirata: document.getElementById("comentario_faro_pirata").value,

    alarma_retroceso_si: document.getElementById("alarma_retroceso_si").checked,
    alarma_retroceso_no: document.getElementById("alarma_retroceso_no").checked,
    comentario_alarma_retroceso: document.getElementById("comentario_alarma_retroceso").value,

    limpia_parabrisas_si: document.getElementById("limpia_parabrisas_si").checked,
    limpia_parabrisas_no: document.getElementById("limpia_parabrisas_no").checked,
    comentario_limpia_parabrisas: document.getElementById("comentario_limpia_parabrisas").value,

    espejos_retrovisores_si: document.getElementById("espejos_retrovisores_si").checked,
    espejos_retrovisores_no: document.getElementById("espejos_retrovisores_no").checked,
    comentario_espejos_retrovisores: document.getElementById("comentario_espejos_retrovisores").value,

    ventanas_laterales_si: document.getElementById("ventanas_laterales_si").checked,
    ventanas_laterales_no: document.getElementById("ventanas_laterales_no").checked,
    comentario_ventanas_laterales: document.getElementById("comentario_ventanas_laterales").value,

    testigos_panel_si: document.getElementById("testigos_panel_si").checked,
    testigos_panel_no: document.getElementById("testigos_panel_no").checked,
    comentario_testigos_panel: document.getElementById("comentario_testigos_panel").value,

    plumillas_si: document.getElementById("plumillas_si").checked,
    plumillas_no: document.getElementById("plumillas_no").checked,
    comentario_plumillas: document.getElementById("comentario_plumillas").value,
    //
    //Elementos//
    //
    botiquin_si: document.getElementById("botiquin_si").checked,
    botiquin_no: document.getElementById("botiquin_no").checked,
    comentario_botiquin: document.getElementById("comentario_botiquin").value,

    extintor_si: document.getElementById("extintor_si").checked,
    extintor_no: document.getElementById("extintor_no").checked,
    comentario_extintor: document.getElementById("comentario_extintor").value,

    conos_si: document.getElementById("conos_si").checked,
    conos_no: document.getElementById("conos_no").checked,
    comentario_conos: document.getElementById("comentario_conos").value,
    cantidad_conos: document.getElementById("cantidad_conos").value,

    tacos_si: document.getElementById("tacos_si").checked,
    tacos_no: document.getElementById("tacos_no").checked,
    comentario_tacos: document.getElementById("comentario_tacos").value,
    cantidad_tacos: document.getElementById("cantidad_tacos").value,

    triangulos_si: document.getElementById("triangulos_si").checked,
    triangulos_no: document.getElementById("triangulos_no").checked,
    comentario_triangulos: document.getElementById("comentario_triangulos").value,
    cantidad_triangulos: document.getElementById("cantidad_triangulos").value,

    cable_remolque_si: document.getElementById("cable_remolque_si").checked,
    cable_remolque_no: document.getElementById("cable_remolque_no").checked,
    comentario_cableremo: document.getElementById("comentario_cableremo").value,

    cablePaen_si: document.getElementById("cablePaen_si").checked,
    cablePaen_no: document.getElementById("cablePaen_no").checked,
    comentario_PaEn: document.getElementById("comentario_PaEn").value,

    eslinga_si: document.getElementById("eslinga_si").checked,
    eslinga_no: document.getElementById("eslinga_no").checked,
    comentario_eslinga: document.getElementById("comentario_eslinga").value,

    linterna_si: document.getElementById("linterna_si").checked,
    linterna_no: document.getElementById("linterna_no").checked,
    comentario_linterna: document.getElementById("comentario_linterna").value,

    herramientas_si: document.getElementById("herramientas_si").checked,
    herramientas_no: document.getElementById("herramientas_no").checked,
    comentario_herramientas: document.getElementById("comentario_herramientas").value,

    anti_si: document.getElementById("anti_si").checked,
    anti_no: document.getElementById("anti_no").checked,
    comentario_antiderrames: document.getElementById("comentario_antiderrames").value,

    martillo_si: document.getElementById("martillo_si").checked,
    martillo_no: document.getElementById("martillo_no").checked,
    comentario_martillo: document.getElementById("comentario_martillo").value,

    circulina_si: document.getElementById("circulina_si").checked,
    circulina_no: document.getElementById("circulina_no").checked,
    comentario_circulina: document.getElementById("comentario_circulina").value,

    cinta_si: document.getElementById("cinta_si").checked,
    cinta_no: document.getElementById("cinta_no").checked,
    comentario_cinta: document.getElementById("comentario_cinta").value,

    cinturon_si: document.getElementById("cinturon_si").checked,
    cinturon_no: document.getElementById("cinturon_no").checked,
    comentario_cinturon: document.getElementById("comentario_cinturon").value,

    pertiga_si: document.getElementById("pertiga_si").checked,
    pertiga_no: document.getElementById("pertiga_no").checked,
    comentario_pertiga: document.getElementById("comentario_pertiga").value,

    camara_si: document.getElementById("camara_si").checked,
    camara_no: document.getElementById("camara_no").checked,
    comentario_camara: document.getElementById("comentario_camara").value,

    sirena_si: document.getElementById("sirena_si").checked,
    sirena_no: document.getElementById("sirena_no").checked,
    comentario_sirena: document.getElementById("comentario_sirena").value,
    //
    // Prueba de Motor en marcha
    //
    freno_servicio_si: document.getElementById("freno_servicio_si").checked,
    freno_servicio_no: document.getElementById("freno_servicio_no").checked,
    comentario_freno_servicio: document.getElementById("comentario_freno_servicio").value,

    fugas_aceite_si: document.getElementById("fugas_aceite_si").checked,
    fugas_aceite_no: document.getElementById("fugas_aceite_no").checked,
    comentario_fugas_aceite: document.getElementById("comentario_fugas_aceite").value,

    sistema_4x4_si: document.getElementById("sistema_4x4_si").checked,
    sistema_4x4_no: document.getElementById("sistema_4x4_no").checked,
    comentario_sistema_4x4: document.getElementById("comentario_sistema_4x4").value,

    nivel_combustible_si: document.getElementById("nivel_combustible_si").checked,
    nivel_combustible_no: document.getElementById("nivel_combustible_no").checked,
    comentario_nivel_combustible: document.getElementById("comentario_nivel_combustible").value,

    temperatura_motor_si: document.getElementById("temperatura_motor_si").checked,
    temperatura_motor_no: document.getElementById("temperatura_motor_no").checked,
    comentario_temperatura_motor: document.getElementById("comentario_temperatura_motor").value,

    presion_aceite_si: document.getElementById("presion_aceite_si").checked,
    presion_aceite_no: document.getElementById("presion_aceite_no").checked,
    comentario_presion_aceite: document.getElementById("comentario_presion_aceite").value,

    aire_acondicionado_si: document.getElementById("aire_acondicionado_si").checked,
    aire_acondicionado_no: document.getElementById("aire_acondicionado_no").checked,
    comentario_aire_acondicionado: document.getElementById("comentario_aire_acondicionado").value,

    direccion_si: document.getElementById("direccion_si").checked,
    direccion_no: document.getElementById("direccion_no").checked,
    comentario_direccion: document.getElementById("comentario_direccion").value,

    pedales_si: document.getElementById("pedales_si").checked,
    pedales_no: document.getElementById("pedales_no").checked,
    comentario_pedales: document.getElementById("comentario_pedales").value,

    puertas_si: document.getElementById("puertas_si").checked,
    puertas_no: document.getElementById("puertas_no").checked,
    comentario_puertas: document.getElementById("comentario_puertas").value,

    fun_ventanas_si: document.getElementById("fun_ventanas_si").checked,
    fun_ventanas_no: document.getElementById("fun_ventanas_no").checked,
    comentario_fun_ventanas: document.getElementById("comentario_fun_ventanas").value,
    //
    // Documentacion
    //
    tarjeta_propiedad_si: document.getElementById("tarjeta_propiedad_si").checked,
    tarjeta_propiedad_no: document.getElementById("tarjeta_propiedad_no").checked,
    comentario_tarjeta_propiedad: document.getElementById("comentario_tarjeta_propiedad").value,

    manual_operacion_si: document.getElementById("manual_operacion_si").checked,
    manual_operacion_no: document.getElementById("manual_operacion_no").checked,
    comentario_manual_operacion: document.getElementById("comentario_manual_operacion").value,

    revision_tecnica_si: document.getElementById("revision_tecnica_si").checked,
    revision_tecnica_no: document.getElementById("revision_tecnica_no").checked,
    comentario_revision_tecnica: document.getElementById("comentario_revision_tecnica").value,

    soat_si: document.getElementById("soat_si").checked,
    soat_no: document.getElementById("soat_no").checked,
    comentario_soat: document.getElementById("comentario_soat").value,

    tarjeta_circulacion_si: document.getElementById("tarjeta_circulacion_si").checked,
    tarjeta_circulacion_no: document.getElementById("tarjeta_circulacion_no").checked,
    comentario_tarjeta_circulacion: document.getElementById("comentario_tarjeta_circulacion").value,
    //
    // Elementos y niveles
    //
    tapa_aceite_motor_si: document.getElementById("tapa_aceite_motor_si").checked,
    tapa_aceite_motor_no: document.getElementById("tapa_aceite_motor_no").checked,
    comentario_tapa_aceite_motor: document.getElementById("comentario_tapa_aceite_motor").value,

    tapa_aceite_hidraulico_si: document.getElementById("tapa_aceite_hidraulico_si").checked,
    tapa_aceite_hidraulico_no: document.getElementById("tapa_aceite_hidraulico_no").checked,
    comentario_tapa_aceite_hidraulico: document.getElementById("comentario_tapa_aceite_hidraulico").value,

    tapa_liquido_frenos_si: document.getElementById("tapa_liquido_frenos_si").checked,
    tapa_liquido_frenos_no: document.getElementById("tapa_liquido_frenos_no").checked,
    comentario_tapa_liquido_frenos: document.getElementById("comentario_tapa_liquido_frenos").value,

    tapa_refrigerante_si: document.getElementById("tapa_refrigerante_si").checked,
    tapa_refrigerante_no: document.getElementById("tapa_refrigerante_no").checked,
    comentario_tapa_refrigerante: document.getElementById("comentario_tapa_refrigerante").value,

    tapa_agua_parabrisas_si: document.getElementById("tapa_agua_parabrisas_si").checked,
    tapa_agua_parabrisas_no: document.getElementById("tapa_agua_parabrisas_no").checked,
    comentario_tapa_agua_parabrisas: document.getElementById("comentario_tapa_agua_parabrisas").value,

    protector_bateria_si: document.getElementById("protector_bateria_si").checked,
    protector_bateria_no: document.getElementById("protector_bateria_no").checked,
    comentario_protector_bateria: document.getElementById("comentario_protector_bateria").value,

    fajas_alternador_si: document.getElementById("fajas_alternador_si").checked,
    fajas_alternador_no: document.getElementById("fajas_alternador_no").checked,
    comentario_fajas_alternador: document.getElementById("comentario_fajas_alternador").value,

    caja_fusibles_si: document.getElementById("caja_fusibles_si").checked,
    caja_fusibles_no: document.getElementById("caja_fusibles_no").checked,
    comentario_caja_fusibles: document.getElementById("comentario_caja_fusibles").value,

    tapa_filtro_aire_si: document.getElementById("tapa_filtro_aire_si").checked,
    tapa_filtro_aire_no: document.getElementById("tapa_filtro_aire_no").checked,
    comentario_tapa_filtro_aire: document.getElementById("comentario_tapa_filtro_aire").value,
    //
    // NEUMATICOS
    //
    medidor_aire_si: document.getElementById("medidor_aire_si").checked,
    medidor_aire_no: document.getElementById("medidor_aire_no").checked,
    comentario_medidor_aire: document.getElementById("comentario_medidor_aire").value,

    aros_si: document.getElementById("aros_si").checked,
    aros_no: document.getElementById("aros_no").checked,
    comentario_aros: document.getElementById("comentario_aros").value,

    p1_si: document.getElementById("p1_si").checked,
    p1_no: document.getElementById("p1_no").checked,
    comentario_p1: document.getElementById("comentario_p1").value,

    p2_si: document.getElementById("p2_si").checked,
    p2_no: document.getElementById("p2_no").checked,
    comentario_p2: document.getElementById("comentario_p2").value,

    p3_si: document.getElementById("p3_si").checked,
    p3_no: document.getElementById("p3_no").checked,
    comentario_p3: document.getElementById("comentario_p3").value,

    p4_si: document.getElementById("p4_si").checked,
    p4_no: document.getElementById("p4_no").checked,
    comentario_p4: document.getElementById("comentario_p4").value,

    p5_si: document.getElementById("p5_si").checked,
    p5_no: document.getElementById("p5_no").checked,
    comentario_p5: document.getElementById("comentario_p5").value,

    p6_si: document.getElementById("p6_si").checked,
    p6_no: document.getElementById("p6_no").checked,
    comentario_p6: document.getElementById("comentario_p6").value,

    llanta_med_si: document.getElementById("llanta_med_si").checked,
    llanta_med_no: document.getElementById("llanta_med_no").checked,
    comentario_llanta_med: document.getElementById("comentario_llanta_med").value,

    gata_si: document.getElementById("gata_si").checked,
    gata_no: document.getElementById("gata_no").checked,
    comentario_gata: document.getElementById("comentario_gata").value,

    llave_ruedas_si: document.getElementById("llave_ruedas_si").checked,
    llave_ruedas_no: document.getElementById("llave_ruedas_no").checked,
    comentario_llave_ruedas: document.getElementById("comentario_llave_ruedas").value,

    traba_tuercas_si: document.getElementById("traba_tuercas_si").checked,
    traba_tuercas_no: document.getElementById("traba_tuercas_no").checked,
    comentario_traba_tuercas: document.getElementById("comentario_traba_tuercas").value,
    //
    // Dispositivos de Proteccion
    //
    antivuelco_ext_si: document.getElementById("antivuelco_ext_si").checked,
    antivuelco_ext_no: document.getElementById("antivuelco_ext_no").checked,
    comentario_antivuelco_ext: document.getElementById("comentario_antivuelco_ext").value,

    jaula_antivuelco_si: document.getElementById("jaula_antivuelco_si").checked,
    jaula_antivuelco_no: document.getElementById("jaula_antivuelco_no").checked,
    comentario_jaula_antivuelco: document.getElementById("comentario_jaula_antivuelco").value,

    punto_ciego_si: document.getElementById("punto_ciego_si").checked,
    punto_ciego_no: document.getElementById("punto_ciego_no").checked,
    comentario_punto_ciego: document.getElementById("comentario_punto_ciego").value,

    letrero_distancia_si: document.getElementById("letrero_distancia_si").checked,
    letrero_distancia_no: document.getElementById("letrero_distancia_no").checked,
    comentario_letrero_distancia: document.getElementById("comentario_letrero_distancia").value,

    letrero_aereo_si: document.getElementById("letrero_aereo_si").checked,
    letrero_aereo_no: document.getElementById("letrero_aereo_no").checked,
    comentario_letrero_aereo: document.getElementById("comentario_letrero_aereo").value,

    NombFEntrada: document.getElementById("NombFEntrada").value,
    NombFSalida: document.getElementById("NombFSalida").value,

    // Nivel de combustible
    nivel1: document.getElementById("nivel1").checked,
    nivel2: document.getElementById("nivel2").checked,
    nivel3: document.getElementById("nivel3").checked,
    nivel4: document.getElementById("nivel4").checked,
    nivel5: document.getElementById("nivel5").checked
    };

  // Crea el archivo .txt para guardarlo
  const data = JSON.stringify(datosFormulario, null, 2);  // Convierte los datos a JSON
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `CLS_${datosFormulario.placa}_${datosFormulario.fecha_ingreso}_${datosFormulario.hora_ingreso}.json`;  // Nombre del archivo
  a.click();
});
