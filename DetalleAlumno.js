import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";

export default function DetalleAlumno({ alumno, onRegresar }) {
  const [mostrarDetalles, setMostrarDetalles] = useState(false);

  const fotoUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(alumno.nombre)}&background=random&color=fff`;

  return (
    <View style={estilos.container}>
      <View style={estilos.card}>
        <Image source={{ uri: fotoUrl }} style={estilos.foto} />

        <Text style={estilos.nombre}>{alumno.nombre}</Text>

        <Pressable
          style={estilos.botonDetalles}
          onPress={() => setMostrarDetalles(!mostrarDetalles)}
        >
          <Text style={estilos.textoBoton}>
            {mostrarDetalles ? "Ocultar detalles" : "Ver mas detalles"}
          </Text>
        </Pressable>

        {mostrarDetalles && (
          <View style={estilos.detalles}>
            <Text style={estilos.textoDetalle}>
              Matricula: {alumno.matricula}
            </Text>
          </View>
        )}

        <Pressable style={estilos.botonRegresar} onPress={onRegresar}>
          <Text style={estilos.textoBoton}>Regresar al inicio</Text>
        </Pressable>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 16,
    alignItems: "center",
    elevation: 3,
  },
  foto: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 12,
  },
  nombre: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
    color: "#111827",
    marginBottom: 12,
  },
  botonDetalles: {
    backgroundColor: "#e91e1e",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
  },
  botonRegresar: {
    backgroundColor: "#16a34a",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  textoBoton: {
    color: "#ffffff",
    fontWeight: "700",
  },
  detalles: {
    width: "100%",
    backgroundColor: "#eef2ff",
    borderRadius: 8,
    padding: 10,
    marginBottom: 4,
  },
  textoDetalle: {
    textAlign: "center",
    color: "#1f2937",
    fontWeight: "600",
  },
});