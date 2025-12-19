#!/bin/bash

# İsim eşleştirme:
# Spiritual_Ascension_Through_Dimensions.mp4 → seans-enerji-akis-yukari.mp4 (yukarı akan enerji)
# Spiritual_Cleansing_Video_Generation.mp4 → seans-arinma-mor-alev.mp4 (arınma/temizleme)
# Video_Oluşturma_Kalp_Tohumu_Enerjisi.mp4 → seans-kalp-tohum.mp4 (kalp tohumu)
# Video_Prompts_For_Animation.mp4 → seans-nefes-4-4-4-4.mp4 (genel animasyon/nefes)

mv "Spiritual_Ascension_Through_Dimensions.mp4" "seans-enerji-akis-yukari.mp4"
mv "Spiritual_Cleansing_Video_Generation.mp4" "seans-arinma-mor-alev.mp4"
mv "Video_Oluşturma_Kalp_Tohumu_Enerjisi.mp4" "seans-kalp-tohum.mp4"
mv "Video_Prompts_For_Animation.mp4" "seans-nefes-4-4-4-4.mp4"

echo "✅ Videolar yeniden adlandırıldı"
ls -lh seans-*.mp4
