import { StyleSheet } from "react-native";
import { spacing } from "../constants/spacing";
import { theme } from "../constants/theme";
import { typography } from "../constants/typography";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.surface,
  },
  content: {
    flexGrow: 1,
    padding: spacing.lg,
    justifyContent: "center",
    alignItems: 'center',
  },
  title: {
    fontSize: typography.sizes.xxxl,
    fontWeight: typography.weights.bold,
    color: theme.colors.primary,
    textAlign: "center",
    marginBottom: spacing.md,
  },
  subtitle: {
    fontSize: typography.sizes.sm,
    color: theme.colors.text.secondary,
    textAlign: "center",
    marginBottom: spacing.xl,
  },
  buttonsContainer: {
    gap: spacing.md,
    marginBottom: spacing.xl,
  },
  features: {
    marginTop: spacing.lg,
  },
  featuresTitle: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.semibold,
    color: theme.colors.text.primary,
  },
  feature: {
    fontSize: typography.sizes.sm,
    color: theme.colors.text.secondary,

  },
});