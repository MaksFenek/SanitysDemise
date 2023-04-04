import React from "react";
import "./ChooseCharacter.scss";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CharacterCard } from "@/shared/molecules/CharacterCard/CharacterCard";
import { ALL_CHARACTERS } from "@/entities/characters";
import _ from "lodash";
import { motion } from "framer-motion";
import { redirect } from "react-router-dom";

export const ChooseCharacter = () => {
  return (
    <motion.div
      className="full choose-character-bg"
      key="choose"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h1" textAlign="center" mt="3rem">
        Choose your character
      </Typography>
      <Box
        display="flex"
        gap="5rem"
        marginX="auto"
        padding="5rem"
        justifyContent="center"
      >
        {_.map(ALL_CHARACTERS, (character) => (
          <CharacterCard character={character} to="/devourer">
            <Typography
              gutterBottom
              variant="h3"
              textAlign="center"
              lineHeight={0.5}
            >
              {character.name}
            </Typography>
            <Typography variant="body1" fontSize="1.4rem" lineHeight={1}>
              {character.shortDescription}
            </Typography>
          </CharacterCard>
        ))}
      </Box>
      <Box display="flex" justifyContent="center">
        <Link to="/">
          <Button>Back</Button>
        </Link>
      </Box>
    </motion.div>
  );
};