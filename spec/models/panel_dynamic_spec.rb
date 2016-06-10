# == Schema Information
#
# Table name: panel_dynamics
#
#  id         :integer          not null, primary key
#  panel_id   :integer
#  dynamic_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_panel_dynamics_on_dynamic_id  (dynamic_id)
#  index_panel_dynamics_on_panel_id    (panel_id)
#

require 'rails_helper'

RSpec.describe PanelDynamic, type: :model do
  it "has a valid factory" do
    expect(build(:panel_dynamic)).to be_valid
  end

  describe  'validation' do
    it { should validate_presence_of(:panel) }
    it { should validate_presence_of(:dynamic) }
  end

  describe 'association' do
    it { should belong_to(:panel) }
    it { should belong_to(:dynamic) }
  end
end
