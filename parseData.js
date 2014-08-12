var fs = require('fs')
	, connection = require('./connection');

var data = fs.readFileSync("data.txt").toString().trim();

var lines = data.split('\n');

var splitLines = [];

for (var i = 0; i < lines.length; i++) {
	var fields = lines[i].split('\t');
	splitLines.push(fields);
}

for (var i = 0; i < splitLines.length; i += 1) {
	var patient = getPatientData(splitLines[i]);

	connection.query('INSERT INTO users SET ?', getPatientData(splitLines[i]), function(err, result) {
		if (err && err.errno != 1062)
			console.log(err);
	});

	connection.query('INSERT INTO scans SET ?', getScanData(splitLines[i]), function(err, result) {
		if (err)
			console.log(err);
	});
}

function formatDateString(date) {
	var parts = date.split('/');

	return parts[2] + '-' + parts[0] + '-' + parts[1];
}

function parseFloatWithComma(string) {
	string = string.replace(",", "");
	var result = parseFloat(string);
	if (Number.isNaN(result))
		return 0;
	else return result;
}

function getPatientData(array) {
	var patient = {};

	patient.LastName = trimIfExists(array[0]);
	patient.FirstName = trimIfExists(array[1]);
	patient.PatientID = trimIfExists(array[2]);
	patient.MostRecentMeasurementDate = formatDateString(trimIfExists(array[3]));
	patient.Gender = trimIfExists(array[4]);
	patient.Ethnicity = trimIfExists(array[5]);
	patient.HeightInches = parseFloatWithComma(trimIfExists(array[6]));
	patient.Weight = parseFloatWithComma(trimIfExists(array[7]));

	return patient;
}

function trimIfExists(value) {
	if (value)
		return value.trim();
	else
		return "";
}

function getScanData(array) {
	var scan = {};

	scan.PatientID = trimIfExists(array[2]);
	scan.MeasureDate = formatDateString(trimIfExists(array[8]));
	scan.Age = trimIfExists(array[9]);
	scan.Dose = trimIfExists(array[10]);
	scan.HeightatExam = parseFloatWithComma(trimIfExists(array[11]));
	scan.WeightatExam = parseFloatWithComma(trimIfExists(array[12]));
	scan.BMI = parseFloatWithComma(trimIfExists(array[13]));
	scan.ArmsBoneMass = parseFloatWithComma(trimIfExists(array[14]));
	scan.ArmRightBoneMass = parseFloatWithComma(trimIfExists(array[15]));
	scan.ArmLeftBoneMass = parseFloatWithComma(trimIfExists(array[16]));
	scan.ArmsDiffBoneMass = parseFloatWithComma(trimIfExists(array[17]));
	scan.LegsBoneMass = parseFloatWithComma(trimIfExists(array[18]));
	scan.LegRightBoneMass = parseFloatWithComma(trimIfExists(array[19]));
	scan.LegLeftBoneMass = parseFloatWithComma(trimIfExists(array[20]));
	scan.LegsDiffBoneMass = parseFloatWithComma(trimIfExists(array[21]));
	scan.TrunkBoneMass = parseFloatWithComma(trimIfExists(array[22]));
	scan.TrunkRightBoneMass = parseFloatWithComma(trimIfExists(array[23]));
	scan.TrunkLeftBoneMass = parseFloatWithComma(trimIfExists(array[24]));
	scan.TrunkDiffBoneMass = parseFloatWithComma(trimIfExists(array[25]));
	scan.AndroidBoneMass = parseFloatWithComma(trimIfExists(array[26]));
	scan.GynoidBoneMass = parseFloatWithComma(trimIfExists(array[27]));
	scan.TotalBoneMass = parseFloatWithComma(trimIfExists(array[28]));
	scan.TotalRightBoneMass = parseFloatWithComma(trimIfExists(array[29]));
	scan.TotalLeftBoneMass = parseFloatWithComma(trimIfExists(array[30]));
	scan.TotalDiffBoneMass = parseFloatWithComma(trimIfExists(array[31]));
	scan.ArmsFatMass = parseFloatWithComma(trimIfExists(array[32]));
	scan.ArmRightFatMass = parseFloatWithComma(trimIfExists(array[33]));
	scan.ArmLeftFatMass = parseFloatWithComma(trimIfExists(array[34]));
	scan.ArmsDiffFatMass = parseFloatWithComma(trimIfExists(array[35]));
	scan.LegsFatMass = parseFloatWithComma(trimIfExists(array[36]));
	scan.LegRightFatMass = parseFloatWithComma(trimIfExists(array[37]));
	scan.LegLeftFatMass = parseFloatWithComma(trimIfExists(array[38]));
	scan.LegsDiffFatMass = parseFloatWithComma(trimIfExists(array[39]));
	scan.TrunkFatMass = parseFloatWithComma(trimIfExists(array[40]));
	scan.TrunkRightFatMass = parseFloatWithComma(trimIfExists(array[41]));
	scan.TrunkLeftFatMass = parseFloatWithComma(trimIfExists(array[42]));
	scan.TrunkDiffFatMass = parseFloatWithComma(trimIfExists(array[43]));
	scan.AndroidFatMass = parseFloatWithComma(trimIfExists(array[44]));
	scan.GynoidFatMass = parseFloatWithComma(trimIfExists(array[45]));
	scan.TotalFatMass = parseFloatWithComma(trimIfExists(array[46]));
	scan.TotalRightFatMass = parseFloatWithComma(trimIfExists(array[47]));
	scan.TotalLeftFatMass = parseFloatWithComma(trimIfExists(array[48]));
	scan.TotalDiffFatMass = parseFloatWithComma(trimIfExists(array[49]));
	scan.ArmsLeanMass = parseFloatWithComma(trimIfExists(array[50]));
	scan.ArmRightLeanMass = parseFloatWithComma(trimIfExists(array[51]));
	scan.ArmLeftLeanMass = parseFloatWithComma(trimIfExists(array[52]));
	scan.ArmsDiffLeanMass = parseFloatWithComma(trimIfExists(array[53]));
	scan.LegsLeanMass = parseFloatWithComma(trimIfExists(array[54]));
	scan.LegRightLeanMass = parseFloatWithComma(trimIfExists(array[55]));
	scan.LegLeftLeanMass = parseFloatWithComma(trimIfExists(array[56]));
	scan.LegsDiffLeanMass = parseFloatWithComma(trimIfExists(array[57]));
	scan.TrunkLeanMass = parseFloatWithComma(trimIfExists(array[58]));
	scan.TrunkRightLeanMass = parseFloatWithComma(trimIfExists(array[59]));
	scan.TrunkLeftLeanMass = parseFloatWithComma(trimIfExists(array[60]));
	scan.TrunkDiffLeanMass = parseFloatWithComma(trimIfExists(array[61]));
	scan.AndroidLeanMass = parseFloatWithComma(trimIfExists(array[62]));
	scan.GynoidLeanMass = parseFloatWithComma(trimIfExists(array[63]));
	scan.TotalLeanMass = parseFloatWithComma(trimIfExists(array[64]));
	scan.TotalRightLeanMass = parseFloatWithComma(trimIfExists(array[65]));
	scan.TotalLeftLeanMass = parseFloatWithComma(trimIfExists(array[66]));
	scan.TotalDiffLeanMass = parseFloatWithComma(trimIfExists(array[67]));
	scan.ArmsTissueMass = parseFloatWithComma(trimIfExists(array[68]));
	scan.ArmRightTissueMass = parseFloatWithComma(trimIfExists(array[69]));
	scan.ArmLeftTissueMass = parseFloatWithComma(trimIfExists(array[70]));
	scan.ArmsDiffTissueMass = parseFloatWithComma(trimIfExists(array[71]));
	scan.LegsTissueMass = parseFloatWithComma(trimIfExists(array[72]));
	scan.LegRightTissueMass = parseFloatWithComma(trimIfExists(array[73]));
	scan.LegLeftTissueMass = parseFloatWithComma(trimIfExists(array[74]));
	scan.LegsDiffTissueMass = parseFloatWithComma(trimIfExists(array[75]));
	scan.TrunkTissueMass = parseFloatWithComma(trimIfExists(array[76]));
	scan.TrunkRightTissueMass = parseFloatWithComma(trimIfExists(array[77]));
	scan.TrunkLeftTissueMass = parseFloatWithComma(trimIfExists(array[78]));
	scan.TrunkDiffTissueMass = parseFloatWithComma(trimIfExists(array[79]));
	scan.AndroidTissueMass = parseFloatWithComma(trimIfExists(array[80]));
	scan.GynoidTissueMass = parseFloatWithComma(trimIfExists(array[81]));
	scan.TotalTissueMass = parseFloatWithComma(trimIfExists(array[82]));
	scan.TotalRightTissueMass = parseFloatWithComma(trimIfExists(array[83]));
	scan.TotalLeftTissueMass = parseFloatWithComma(trimIfExists(array[84]));
	scan.TotalDiffTissueMass = parseFloatWithComma(trimIfExists(array[85]));
	scan.ArmsFatFreeMass = parseFloatWithComma(trimIfExists(array[86]));
	scan.ArmRightFatFreeMass = parseFloatWithComma(trimIfExists(array[87]));
	scan.ArmLeftFatFreeMass = parseFloatWithComma(trimIfExists(array[88]));
	scan.ArmsDiffFatFreeMass = parseFloatWithComma(trimIfExists(array[89]));
	scan.LegsFatFreeMass = parseFloatWithComma(trimIfExists(array[90]));
	scan.LegRightFatFreeMass = parseFloatWithComma(trimIfExists(array[91]));
	scan.LegLeftFatFreeMass = parseFloatWithComma(trimIfExists(array[92]));
	scan.LegsDiffFatFreeMass = parseFloatWithComma(trimIfExists(array[93]));
	scan.TrunkFatFreeMass = parseFloatWithComma(trimIfExists(array[94]));
	scan.TrunkRightFatFreeMass = parseFloatWithComma(trimIfExists(array[95]));
	scan.TrunkLeftFatFreeMass = parseFloatWithComma(trimIfExists(array[96]));
	scan.TrunkDiffFatFreeMass = parseFloatWithComma(trimIfExists(array[97]));
	scan.AndroidFatFreeMass = parseFloatWithComma(trimIfExists(array[98]));
	scan.GynoidFatFreeMass = parseFloatWithComma(trimIfExists(array[99]));
	scan.TotalFatFreeMass = parseFloatWithComma(trimIfExists(array[100]));
	scan.TotalRightFatFreeMass = parseFloatWithComma(trimIfExists(array[101]));
	scan.TotalLeftFatFreeMass = parseFloatWithComma(trimIfExists(array[102]));
	scan.TotalDiffFatFreeMass = parseFloatWithComma(trimIfExists(array[103]));
	scan.ArmsTotalMass = parseFloatWithComma(trimIfExists(array[104]));
	scan.ArmRightTotalMass = parseFloatWithComma(trimIfExists(array[105]));
	scan.ArmLeftTotalMass = parseFloatWithComma(trimIfExists(array[106]));
	scan.ArmsDiffTotalMass = parseFloatWithComma(trimIfExists(array[107]));
	scan.LegsTotalMass = parseFloatWithComma(trimIfExists(array[108]));
	scan.LegRightTotalMass = parseFloatWithComma(trimIfExists(array[109]));
	scan.LegLeftTotalMass = parseFloatWithComma(trimIfExists(array[110]));
	scan.LegsDiffTotalMass = parseFloatWithComma(trimIfExists(array[111]));
	scan.TrunkTotalMass = parseFloatWithComma(trimIfExists(array[112]));
	scan.TrunkRightTotalMass = parseFloatWithComma(trimIfExists(array[113]));
	scan.TrunkLeftTotalMass = parseFloatWithComma(trimIfExists(array[114]));
	scan.TrunkDiffTotalMass = parseFloatWithComma(trimIfExists(array[115]));
	scan.AndroidTotalMass = parseFloatWithComma(trimIfExists(array[116]));
	scan.GynoidTotalMass = parseFloatWithComma(trimIfExists(array[117]));
	scan.TotalTotalMass = parseFloatWithComma(trimIfExists(array[118]));
	scan.TotalRightTotalMass = parseFloatWithComma(trimIfExists(array[119]));
	scan.TotalLeftTotalMass = parseFloatWithComma(trimIfExists(array[120]));
	scan.TotalDiffTotalMass = parseFloatWithComma(trimIfExists(array[121]));
	scan.ArmsRegionPercentFat = parseFloatWithComma(trimIfExists(array[122]));
	scan.ArmRightRegionPercentFat = parseFloatWithComma(trimIfExists(array[123]));
	scan.ArmLeftRegionPercentFat = parseFloatWithComma(trimIfExists(array[124]));
	scan.ArmsDiffRegionPercentFat = parseFloatWithComma(trimIfExists(array[125]));
	scan.LegsRegionPercentFat = parseFloatWithComma(trimIfExists(array[126]));
	scan.LegRightRegionPercentFat = parseFloatWithComma(trimIfExists(array[127]));
	scan.LegLeftRegionPercentFat = parseFloatWithComma(trimIfExists(array[128]));
	scan.LegsDiffRegionPercentFat = parseFloatWithComma(trimIfExists(array[129]));
	scan.TrunkRegionPercentFat = parseFloatWithComma(trimIfExists(array[130]));
	scan.TrunkRightRegionPercentFat = parseFloatWithComma(trimIfExists(array[131]));
	scan.TrunkLeftRegionPercentFat = parseFloatWithComma(trimIfExists(array[132]));
	scan.TrunkDiffRegionPercentFat = parseFloatWithComma(trimIfExists(array[133]));
	scan.AndroidRegionPercentFat = parseFloatWithComma(trimIfExists(array[134]));
	scan.GynoidRegionPercentFat = parseFloatWithComma(trimIfExists(array[135]));
	scan.TotalRegionPercentFat = parseFloatWithComma(trimIfExists(array[136]));
	scan.TotalRightRegionPercentFat = parseFloatWithComma(trimIfExists(array[137]));
	scan.TotalLeftRegionPercentFat = parseFloatWithComma(trimIfExists(array[138]));
	scan.TotalDiffRegionPercentFat = parseFloatWithComma(trimIfExists(array[139]));
	scan.ArmsTissuePercentFat = parseFloatWithComma(trimIfExists(array[140]));
	scan.ArmRightTissuePercentFat = parseFloatWithComma(trimIfExists(array[141]));
	scan.ArmLeftTissuePercentFat = parseFloatWithComma(trimIfExists(array[142]));
	scan.ArmsDiffTissuePercentFat = parseFloatWithComma(trimIfExists(array[143]));
	scan.LegsTissuePercentFat = parseFloatWithComma(trimIfExists(array[144]));
	scan.LegRightTissuePercentFat = parseFloatWithComma(trimIfExists(array[145]));
	scan.LegLeftTissuePercentFat = parseFloatWithComma(trimIfExists(array[146]));
	scan.LegsDiffTissuePercentFat = parseFloatWithComma(trimIfExists(array[147]));
	scan.TrunkTissuePercentFat = parseFloatWithComma(trimIfExists(array[148]));
	scan.TrunkRightTissuePercentFat = parseFloatWithComma(trimIfExists(array[149]));
	scan.TrunkLeftTissuePercentFat = parseFloatWithComma(trimIfExists(array[150]));
	scan.TrunkDiffTissuePercentFat = parseFloatWithComma(trimIfExists(array[151]));
	scan.AndroidTissuePercentFat = parseFloatWithComma(trimIfExists(array[152]));
	scan.GynoidTissuePercentFat = parseFloatWithComma(trimIfExists(array[153]));
	scan.TotalTissuePercentFat = parseFloatWithComma(trimIfExists(array[154]));
	scan.TotalRightTissuePercentFat = parseFloatWithComma(trimIfExists(array[155]));
	scan.TotalLeftTissuePercentFat = parseFloatWithComma(trimIfExists(array[156]));
	scan.TotalDiffTissuePercentFat = parseFloatWithComma(trimIfExists(array[157]));
	scan.TBW = trimIfExists(array[158]);
	scan.ICW = trimIfExists(array[159]);
	scan.ECW = trimIfExists(array[160]);
	scan.TBWDevice = trimIfExists(array[161]);

	return scan;
}


connection.end();
